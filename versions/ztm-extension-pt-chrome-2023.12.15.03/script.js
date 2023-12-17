// ----------
// Start Togglebar Section
// ----------

var lectureLeft = document.querySelector('.nav-icon-back');
var addZtmToggleCheckbox = document.createElement('div');

addZtmToggleCheckbox.innerHTML = `
<!-- ZTM Toggle Bar by Sithu Khant -->

<style type="text/css">
    .ztm-toggle-hide {
        position: absolute;
        top: 50%;
        left: 60px;
        transform: translateY(-50%);
    }

    @media screen and (max-width: 765px) {
        .ztm-toggle-hide {
            display: none;
        }
    }

    .course-sidebar {
        border-right: none !important;
    }

    header.half-height .lecture-nav a.nav-btn {
        border-left: none !important;
    }

    .full-width {
        border-bottom: none !important;
    }

    section.lecture-page-layout {
        overflow: hidden !important;
    }
</style>

<div class="switch ztm-toggle-hide">
    <input id="ztm-toggle-hide" class="custom-toggle custom-toggle-round" type="checkbox">
    <label for="ztm-toggle-hide"></label>
</div> 

<!-- ZTM Toggle Bar by Sithu Khant -->
`;

// add toggle checkbox after back-to-home icon
lectureLeft.parentNode.insertBefore(addZtmToggleCheckbox, lectureLeft.nextSibling);

var ztmToggleCheckbox = document.getElementById('ztm-toggle-hide');
var courseSidebar = document.getElementById('courseSidebar');

// check if darkmode is enabled in localStorage
var isSidebarToggleEnabled = localStorage.getItem('ztmToggleSidebarkMode') === 'true';

// store darkmode checkbox status
ztmToggleCheckbox.checked = isSidebarToggleEnabled;

function ztmToggleSidebar() {
    var lectureVideo = document.querySelector('.course-mainbar.lecture-content');

    // if checked, hide sidebar
    if (ztmToggleCheckbox.checked) {
        courseSidebar.style.transform = 'translateX(-100%)'

        lectureVideo.style.marginLeft = '0';
    } else {
        courseSidebar.style.transition = "transform 0.3s";
        courseSidebar.style.transform = 'translateX(0%)';

        lectureVideo.style.marginLeft = '';
        lectureVideo.style.transition = "all 0.3s";
    };

    // store darkmode checkbox status
    localStorage.setItem('ztmToggleSidebarkMode', ztmToggleCheckbox.checked);
};

// hide sidebar
ztmToggleCheckbox.addEventListener('change', ztmToggleSidebar);

// Use MutationObserver to detect changes and apply styles
var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        // Check if a new node with the target class is added
        if (mutation.addedNodes) {
            mutation.addedNodes.forEach(function (node) {
                if (node.classList && node.classList.contains('course-mainbar') && node.classList.contains('lecture-content')) {
                    // Apply styles to the new node
                    ztmToggleSidebar();
                }
            });
        }
    });
});

// Configure and start the observer
var observerConfig = { childList: true, subtree: true };
observer.observe(document.body, observerConfig);
ztmToggleSidebar();

// ----------
// End Togglebar Section
// ----------

// ----------
// Start Darkmode Section
// ----------

var dropdownMenuUl = document.querySelector('.dropdown-menu');
var addZtmDarkmodeLi = document.createElement('span');
var addZtmDarkmodeStyle = document.createElement('div');

addZtmDarkmodeLi.innerHTML = `
<!-- ZTM Darkmode by Sithu Khant -->

<li class="nav-focus" aria-label="menuitem">
    <div class="switch" id="switch-autoplay-lectures">
        <input id="ztm-darkmode" class="custom-toggle custom-toggle-round" type="checkbox">
        <label for="ztm-darkmode"></label>
    </div>
    <span>Darkmode</span>
</li>

<!-- ZTM Darkmode by Sithu Khant -->
`;

addZtmDarkmodeStyle.innerHTML = `
<!-- ZTM Darkmode Style by Sithu Khant -->

<style type="text/css">
    ::-webkit-scrollbar {
        background: #0C1220;
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background: #202072;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }

    header.half-height .lecture-left a.nav-icon-back{
        background-color: #0F1628 !important;
    }

    .course-sidebar .course-progress .course-progress-percentage {
        color: #32dd88 !important;
    }

    .progressbar {
        background-color: #202072 !important;
    }

    .progressbar .progressbar-fill {
        background-color: #32dd88 !important;
    }

    header.half-height .lecture-left .settings-dropdown ul.dropdown-menu,
    header.half-height .lecture-left .settings-dropdown ul.dropdown-menu li {
        border-color: #1C2949 !important;
    }

    body,
    div,
    ul, li, strong, a {
        background-color: #0F1628 !important;
        color: #fff !important;
        scrollbar-color: #202072 #0C1220;
    }

    header.half-height .lecture-left .nav-icon-back {
        background-color: #fff !important;
        color: #fff !important;
        fill: #fff !important;
    }

    input.custom-toggle-round:checked+label:before {
        background: #1C2949 !important;
        border: 1px solid #1C2949;
    }

    input.custom-toggle-round:checked+label:after {
        background: #fff !important;
        border: 1px solid #1C2949;
    }

    #settings_menu:hover, .nav-btn:hover,
    header.half-height .lecture-left .nav-icon-settings:hover, header.half-height .lecture-left .nav-icon-list:hover {
        background-color: #1C2949 !important;
    }

    header.half-height .lecture-left .open .dropdown-toggle {
        background-color: #1C2949 !important;
    }

    .course-section ul.section-list .section-item.next-lecture .item:hover span.status-icon,
    .course-section ul.section-list .section-item.next-lecture span.status-icon,
    .course-section ul.section-list .section-item.incomplete .status-icon {
        box-shadow: inset 0 0 0 2px #b8b8b8 !important;
    }

    .course-section ul.section-list .section-item.next-lecture .item,
    .course-section ul.section-list .section-item.next-lecture .item div {
        background-color: #000 !important;
    }

    .course-sidebar .row.lecture-sidebar .course-section .item:hover, 
    .course-sidebar .row.lecture-sidebar .course-section .item:hover div {
        background-color: #1C2949 !important;
    }

    header.half-height .lecture-left .nav-icon-list.nav-icon-list,
    header.half-height .lecture-left .nav-icon-list:hover {
        background-color: #1C2949 !important;
    }

    .course-mainbar.lecture-content.full-width-content * {
        background-color: #0F1628;
        color: #fff;
    }

    .course-mainbar.lecture-content.full-width-content code,
    .course-mainbar.lecture-content.full-width-content pre {
        border: 0.5px solid #fff;
    }

    .lecture-content .lecture-attachment a {
        text-decoration: underline;
    }

    .lecture-content .lecture-attachment .video-options * {
        background-color: #1C2949 !important;
    }

    .course-section ul.section-list .section-item.completed .item span.status-icon {
        background-color: rgb(69, 149, 89);
    }

    .course-mainbar.lecture-content.full-width-content code {
        color: #ddbbc4;
        background-color: #753043;
        border: 0.5px solid #ddbbc4 !important;
    }

    pre.ql-syntax {
        background-color: #0b0a18 !important;
    }
</style>

<!-- ZTM Darkmode Style by Sithu Khant -->
`;

// append the darkmode style li to ul
dropdownMenuUl.appendChild(addZtmDarkmodeLi);

var ztmToggleDarkmodeCheckbox = document.getElementById('ztm-darkmode');

// check if darkmode is enabled in localStorage
var isDarkModeEnabled = localStorage.getItem('ztmDarkMode') === 'true';

// store darkmode checkbox status
ztmToggleDarkmodeCheckbox.checked = isDarkModeEnabled;

function ztmToggleDarkmode() {
    if (ztmToggleDarkmodeCheckbox.checked) {
        // append the darkmode style li to ul
        dropdownMenuUl.appendChild(addZtmDarkmodeStyle);
    } else {
       dropdownMenuUl.removeChild(addZtmDarkmodeStyle);
    };

    // store darkmode checkbox status
    localStorage.setItem('ztmDarkMode', ztmToggleDarkmodeCheckbox.checked);
};

ztmToggleDarkmodeCheckbox.addEventListener('change', ztmToggleDarkmode);
ztmToggleDarkmode();

// ----------
// End Darkmode Section
// ----------
