
addBtn = document.getElementById("id-add-memo")
addBtn.addEventListener("click",addMemo)

memoList = document.getElementById("id-memo-list")

function addMemo(event) {
	memoTest = document.getElementById("id-memo-text")
	currentMemoList = memoList.innerHTML
	memoList.innerHTML = `${currentMemoList}<div id='memo-${memoCount()}'>・${memoTest.value}<input onclick="deleteMemo(event)" type="button" value="削除"></div>`
	memoTest.value = ""
}

function memoCount() {
	return document.querySelector('#id-memo-list').childNodes.length +1
}
// メモを全部削除する
deleteBtn = document.getElementById("id-delete-memo")
deleteBtn.addEventListener("click",allDeleteMemo)
// メモを全部削除する
function allDeleteMemo(event) {
	memoList.innerHTML = ""
}
// メモを削除する
function deleteMemo(event) {
	// 削除するメモの親要素を取得
	let memoDiv = event.target.parentNode;
	// 親要素を削除
	memoDiv.parentNode.removeChild(memoDiv);
}
