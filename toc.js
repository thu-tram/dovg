// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item "><a href="index.html">Homepage</a></li><li class="chapter-item "><a href="1-a.html">A (Exclam.)</a></li><li class="chapter-item "><a href="2-a.html">À (Par.)</a></li><li class="chapter-item "><a href="3-ay1.html">Ấy (De. Pro.)</a></li><li class="chapter-item "><a href="4-ay2.html">Ấy (De. Adj.)</a></li><li class="chapter-item "><a href="5-bi.html">Bị (V.)</a></li><li class="chapter-item "><a href="6-ca1.html">Cả (Adj.)</a></li><li class="chapter-item "><a href="7-ca2.html">Cả (Par.)</a></li><li class="chapter-item "><a href="8-cac.html">Các (Art.)</a></li><li class="chapter-item "><a href="9-cai1.html">Cái (Cn)</a></li><li class="chapter-item "><a href="10-cai2.html">Cái (Em)</a></li><li class="chapter-item "><a href="11-chi.html">Chỉ (Adv)</a></li><li class="chapter-item "><a href="12-chinh.html">Chính (Par)</a></li><li class="chapter-item "><a href="13-cho1.html">Cho (Prep)</a></li><li class="chapter-item "><a href="14-cho2.html">Cho (Par)</a></li><li class="chapter-item "><a href="15-chu1.html">Chứ (Conj)</a></li><li class="chapter-item "><a href="16-chu2.html">Chứ (Par)</a></li><li class="chapter-item "><a href="17-co.html">Có (Par)</a></li><li class="chapter-item "><a href="18-con.html">Con (Cn)</a></li><li class="chapter-item "><a href="19-con1.html">Còn (V)</a></li><li class="chapter-item "><a href="20-con2.html">Còn (Adv)</a></li><li class="chapter-item "><a href="21-con3.html">Còn (Conj)</a></li><li class="chapter-item "><a href="22-cung.html">Cũng (Adv)</a></li><li class="chapter-item "><a href="23-cu.html">Cứ (Adv)</a></li><li class="chapter-item "><a href="24-da.html">Đã (Adv)</a></li><li class="chapter-item "><a href="25-dang.html">Đang (Adv)</a></li><li class="chapter-item "><a href="26-day1.html">Đây (De Pro)</a></li><li class="chapter-item "><a href="27-day2.html">Đây (Par)</a></li><li class="chapter-item "><a href="28-day-s1.html">Đấy (De Pro)</a></li><li class="chapter-item "><a href="29-day-s2.html">Đấy (De Adj)</a></li><li class="chapter-item "><a href="30-day-s3.html">Đấy (Par)</a></li><li class="chapter-item "><a href="31-duoc1.html">Được (V)</a></li><li class="chapter-item "><a href="32-duoc2.html">Được (Adv)</a></li><li class="chapter-item "><a href="33-hang1.html">Hàng / Hằng (Quan.)</a></li><li class="chapter-item "><a href="33-hang2.html">Hàng (Par)</a></li><li class="chapter-item "><a href="34-khi.html">Khi (N)</a></li><li class="chapter-item "><a href="35-kia1.html">Kia (De Pro)</a></li><li class="chapter-item "><a href="36-kia2.html">Kia (De Adj)</a></li><li class="chapter-item "><a href="37-kia-p.html">Kìa (De Pro)</a></li><li class="chapter-item "><a href="38-la1.html">Là (V)</a></li><li class="chapter-item "><a href="39-la2.html">Là (Conj)</a></li><li class="chapter-item "><a href="40-la3.html">Là (Prep)</a></li><li class="chapter-item "><a href="41-la4.html">Là (Par)</a></li><li class="chapter-item "><a href="42-lai1.html">Lại (V)</a></li><li class="chapter-item "><a href="43-lai2.html">Lại (Adv 1)</a></li><li class="chapter-item "><a href="44-lai3.html">Lại (Adv 2)</a></li><li class="chapter-item "><a href="45-lai4.html">Lại (Adv 3)</a></li><li class="chapter-item "><a href="46-lam.html">Lắm (Adj)</a></li><li class="chapter-item "><a href="47-lam-adv.html">Lắm (Adv)</a></li><li class="chapter-item "><a href="48-lien1.html">Liền (Adv 1)</a></li><li class="chapter-item "><a href="49-lien2.html">Liền (Adv 2)</a></li><li class="chapter-item "><a href="50-luon1.html">Luôn (Adv 1)</a></li><li class="chapter-item "><a href="51-luon2.html">Luôn (Adv 2)</a></li><li class="chapter-item "><a href="52-ma1.html">Mà (Conj 1)</a></li><li class="chapter-item "><a href="53-ma2.html">Mà (Conj 2)</a></li><li class="chapter-item "><a href="54-ma3.html">Mà (Conj 3)</a></li><li class="chapter-item "><a href="55-ma4.html">Mà (Conj 4)</a></li><li class="chapter-item "><a href="56-ma5.html">Mà (Conj 5)</a></li><li class="chapter-item "><a href="57-ma6.html">Mà (Par)</a></li><li class="chapter-item "><a href="58-mat.html">Mất (Par)</a></li><li class="chapter-item "><a href="59-moi.html">Mọi (Quan)</a></li><li class="chapter-item "><a href="60-moi-quan.html">Mỗi (Quan)</a></li><li class="chapter-item "><a href="61-moi-par.html">Mỗi (Par)</a></li><li class="chapter-item "><a href="62-moi-adv1.html">Mới (Adv 1)</a></li><li class="chapter-item "><a href="63-moi-adv2.html">Mới (Adv 2)</a></li><li class="chapter-item "><a href="64-moi-prep.html">Mới (Prep)</a></li><li class="chapter-item "><a href="65-ngay-adv1.html">Ngay (Adv 1)</a></li><li class="chapter-item "><a href="66-ngay-par1.html">Ngay (Par 1)</a></li><li class="chapter-item "><a href="67-ngay-par2.html">Ngay (Par 2)</a></li><li class="chapter-item "><a href="68-ngoai.html">Ngoài (Prep)</a></li><li class="chapter-item "><a href="69-nhe.html">Nhé (Par)</a></li><li class="chapter-item "><a href="70-nhi.html">Nhỉ (Par)</a></li><li class="chapter-item "><a href="71-nhung1.html">Những (Quan 1)</a></li><li class="chapter-item "><a href="72-nhung2.html">Những (Par)</a></li><li class="chapter-item "><a href="73-o.html">Ở (Prep)</a></li><li class="chapter-item "><a href="74-phai1.html">Phải (V 1)</a></li><li class="chapter-item "><a href="75-phai2.html">Phải (V 2)</a></li><li class="chapter-item "><a href="76-qua1.html">Quá (V)</a></li><li class="chapter-item "><a href="77-qua2.html">Quá (Adv)</a></li><li class="chapter-item "><a href="78-rat.html">Rất (Adv)</a></li><li class="chapter-item "><a href="79-roi-adv.html">Rồi (Adv)</a></li><li class="chapter-item "><a href="80-roi-conj.html">Rồi (Conj)</a></li><li class="chapter-item "><a href="81-sap.html">Sắp (Adv)</a></li><li class="chapter-item "><a href="82-se.html">Sẽ (Adv)</a></li><li class="chapter-item "><a href="83-suyt.html">Suýt (Adv)</a></li><li class="chapter-item "><a href="84-tai.html">Tại (Prep)</a></li><li class="chapter-item "><a href="85-tat-ca.html">Tất cả (Pro)</a></li><li class="chapter-item "><a href="86-the-pro.html">Thế (Pro)</a></li><li class="chapter-item "><a href="87-the-par.html">Thế (Par)</a></li><li class="chapter-item "><a href="88-thi.html">Thì (Par)</a></li><li class="chapter-item "><a href="89-thoi.html">Thôi (Par)</a></li><li class="chapter-item "><a href="90-toan-v.html">Toan (V)</a></li><li class="chapter-item "><a href="91-toan-adj.html">Toàn (Adj)</a></li><li class="chapter-item "><a href="92-tru.html">Trừ (Prep)</a></li><li class="chapter-item "><a href="93-tru-phi.html">Trừ phi (Conj)</a></li><li class="chapter-item "><a href="94-tung-n.html">Từng (N)</a></li><li class="chapter-item "><a href="95-tung-adv.html">Từng (Adv)</a></li><li class="chapter-item "><a href="96-tung-quan.html">Từng (Quan)</a></li><li class="chapter-item "><a href="97-van.html">Vẫn (Adv)</a></li><li class="chapter-item "><a href="98-vay-pro.html">Vậy (Pro)</a></li><li class="chapter-item "><a href="99-vay-par1.html">Vậy (Par 1)</a></li><li class="chapter-item "><a href="100-vay-par2.html">Vậy (Par 2)</a></li><li class="chapter-item "><a href="101-vua.html">Vừa (Adv)</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
