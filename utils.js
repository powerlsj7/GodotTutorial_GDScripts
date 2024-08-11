// scripts.js
function NextPage(pageName,id) {
    // ID가 'button'인 요소를 가져옵니다.
    const button = document.getElementById(id);

    // 클릭 이벤트 리스너를 추가합니다.
    button.addEventListener('click', function () {
        window.location.href = pageName;
    });
}
