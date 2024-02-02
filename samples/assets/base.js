// --------------------------------------------
// teatarea 自動リサイズ
// --------------------------------------------

// ID が message の textarea 要素を処理対象に指定
const textarea = document.querySelector("textarea#message")

if (textarea !== null) {
	// スタイルの初期状態を設定
	textarea.style.overflowY = "hidden" // スクロールバーを非表示
	textarea.style.resize = "none" // 標準のリサイズ機能を無効化
	textarea.style.height = "auto" // 高さをautoに指定

	// textarea を入力内容に合わせた高さにセット
	textarea.addEventListener("input", autoResize)
	function autoResize() {
		this.style.height = "auto" // 高さを初期状態（auto）にリセット
		this.style.height = this.scrollHeight + "px" // 入力内容の高さ（scrollHeight）を取得してセット

		this.style.maxHeight = "128px" // textarea の高さの最大値を 128px にセット
		if (this.scrollHeight > 128) {
			this.style.overflowY = "auto" // 入力内容の高さが 128px より大きいときはスクロールバーを表示
		} else {
			this.style.overflowY = "hidden" // 入力内容の高さが 128px以下のときはスクロールバーを非表示
		}
	}

	// Ctrl + Enter または Command + Enter で送信
	textarea.addEventListener("keydown", sendByEnter)
	function sendByEnter(event) {
		if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
			textarea.form.submit() // フォームを送信する
		}
	}
}
