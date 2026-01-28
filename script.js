// 갤러리 필터 로직
function filterGallery(type) {
    const siteGrid = document.getElementById("gallery-site");
    const planGrid = document.getElementById("gallery-plan");
    const btnSite = document.getElementById("btn-site");
    const btnPlan = document.getElementById("btn-plan");

    if (type === "site") {
        siteGrid.classList.remove("hidden");
        planGrid.classList.add("hidden");
        btnSite.classList.add("active");
        btnSite.classList.remove("text-gray-400");
        btnPlan.classList.remove("active");
        btnPlan.classList.add("text-gray-400");
    } else {
        siteGrid.classList.add("hidden");
        planGrid.classList.remove("hidden");
        btnSite.classList.remove("active");
        btnSite.classList.add("text-gray-400");
        btnPlan.classList.add("active");
        btnPlan.classList.remove("text-gray-400");
    }
}

// 이미지 팝업 열기 (썸네일 -> 원본 로딩 전략)
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const imgSrc = element.src;

    modal.style.display = "flex";
    modalImg.src = imgSrc;

    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

/**
 * 텍스트를 클립보드에 복사하고 사용자에게 피드백을 제공하는 함수
 */
function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text).then(
        function () {
            const originalHTML = element.innerHTML;
            element.innerHTML = '<i class="fas fa-check"></i> 복사 완료!';
            element.disabled = true;
            setTimeout(function () {
                element.innerHTML = originalHTML;
                element.disabled = false;
            }, 2000);
        },
        function (err) {
            alert("복사 실패: " + err);
        },
    );
}
