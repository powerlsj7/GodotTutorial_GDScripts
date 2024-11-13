// scripts.js
function NextPage(pageName,id) {
    // ID�� 'button'�� ��Ҹ� �����ɴϴ�.
    const button = document.getElementById(id);
    const audio = document.getElementById('buttonAudio');
    const volume=document.getElementById('volumeControl');
    audio.volume    =0.5;

    // Ŭ�� �̺�Ʈ �����ʸ� �߰��մϴ�.
    button.addEventListener('click', function () {
        button.disabled = true;
        audio.play();
        audio.onended = function() {
            window.location.href = pageName; // 페이지 전환
        };
    });
}
// function PrintImage(address,canvasId) {
//     let canvas = document.getElementById(canvasId); // canvasId는 실제 캔버스의 id로 바꿔야 합니다.
//     let context = canvas.getContext("2d");
//     let img = new Image();
    
//     img.onload = function() {
//         context.drawImage(img, 0, 0); // 이미지를 (0, 0) 위치에 그립니다.
//     }
    
//     img.src = address; // 이미지 주소를 설정합니다.
// }
function PrintImage(file)
{
// JavaScript를 사용하여 이미지와 텍스트를 동적으로 생성합니다.
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    // 이미지 요소 생성
    const imgElement = document.createElement('img');
    imgElement.src = file; // 이미지 파일 경로
    imgElement.alt = '사진'; // 이미지에 대한 대체 텍스트
    // 이미지 요소를 컨테이너에 추가
    container.appendChild(imgElement);
});
}
function CopyCode(code='code-block') {
    // 코드 블록의 텍스트를 가져옵니다.
    const codeBlock = document.getElementById(code);
    const codeText = codeBlock.textContent || codeBlock.innerText;

    // Clipboard API를 사용하여 클립보드에 복사합니다.
    navigator.clipboard.writeText(codeText).then(function() {
        // 복사 성공 시 알림을 표시합니다.
       // alert('코드가 클립보드에 복사되었습니다!');
    }).catch(function(error) {
        // 복사 실패 시 오류를 콘솔에 기록합니다.
        console.error('복사 실패:', error);
    });
}