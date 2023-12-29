const lectureLeft = document.querySelector('.nav-icon-back');

// ----------
// Poor Man's Focus on Video Section - Start
// ----------

focusOnVideo = () => {
    let videoElement = document.getElementsByClassName("_1jWb8 _13nB1");
    let vidOffset = -65;
    let vidPos = videoElement[0].getBoundingClientRect().top + window.scrollY + vidOffset;

    window.scrollTo({top: vidPos, behavior: "smooth"});
}

var addZtmFocusVideo = document.createElement('div');

addZtmFocusVideo.innerHTML = `
<!-- ZTM Focus on Video by aeelis -->

<style type="text/css">

    header.half-height .lecture-left {
        align-items: center;
    }

    #ztm-focus-btn{
        border-radius: 10px;
    }

    @media screen and (max-width: 765px) {
        #ztm-focus-btn{
            display: none;
        }
    }

    iframe._1jWb8._13nB1 {
        height: auto !important;
        width: 100% !important;
        max-height: 91vh;
        aspect-ratio: 16/9;
        margin: 0 auto !important;
    }

    div.video-options a.download {
        border-radius: 6px !important;
        margin-top: 5px;
    }

    /* This hides the useless scrollbars inside the actual lecture box, which are only visible on Chrome and Firefox. */
    section.lecture-page-layout {
        overflow: hidden !important;
    }

</style>

<div class="ztm-focus-btn">
    <button type="button" name="ztm-focus-btn" id="ztm-focus-btn">Focus Video</button>
</div> 

<!-- ZTM Focus on Video by aeelis -->`

lectureLeft.parentNode.insertBefore(addZtmFocusVideo, lectureLeft.nextSibling);

var ztmFocusBtn = document.getElementById('ztm-focus-btn');

ztmFocusBtn.addEventListener('click', focusOnVideo);

// ----------
// Poor Man's Focus on Video Section - End
// ----------
// Some extra code for auto-focus on load at the end.

// ----------
// Start Togglebar Section
// ----------

const addZtmToggleCheckbox = document.createElement('div');

addZtmToggleCheckbox.innerHTML = `
<!-- ZTM Toggle Bar by Sithu Khant - Start -->

<div class="switch ztm-toggle-hide">
    <input id="ztm-toggle-hide" class="custom-toggle custom-toggle-round" type="checkbox">
    <label for="ztm-toggle-hide"></label>
</div> 

<!-- ZTM Toggle Bar by Sithu Khant - End -->
`;

if (lectureLeft) {
    lectureLeft.parentNode.insertBefore(addZtmToggleCheckbox, lectureLeft.nextSibling);

    const ztmToggleCheckbox = document.getElementById('ztm-toggle-hide');
    const courseSidebar = document.getElementById('courseSidebar');

    // check if dark mode is enabled in localStorage
    const isSidebarToggleEnabled = localStorage.getItem('ztmToggleSidebarkMode') === 'true';

    // store dark mode checkbox status
    ztmToggleCheckbox.checked = isSidebarToggleEnabled;

    const ztmToggleSidebar = () => {
        const lectureVideo = document.querySelector('.course-mainbar.lecture-content');

        // if checked, hide sidebar
        if (ztmToggleCheckbox.checked) {
            courseSidebar.style.transform = 'translateX(-100%)';

            lectureVideo.style.marginLeft = '0';
        } else {
            courseSidebar.style.transition = 'transform 0.3s';
            courseSidebar.style.transform = 'translateX(0%)';

            lectureVideo.style.marginLeft = '';
            lectureVideo.style.transition = 'all 0.3s';
        };

        // store dark mode checkbox status
        localStorage.setItem('ztmToggleSidebarkMode', ztmToggleCheckbox.checked);
    };

    // hide sidebar
    ztmToggleCheckbox.addEventListener('change', ztmToggleSidebar);

    // Use MutationObserver to detect changes and apply styles
    const observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            // Check if a new node with the target class is added
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(function (node) {
                    const hasSideBar = node.classList?.contains('course-mainbar')
                        && node.classList?.contains('lecture-content');
                    if (hasSideBar) {
                        // Apply styles to the new node
                        ztmToggleSidebar();
                    }
                });
            }
        });
    });

    // Configure and start the observer
    const observerConfig = { childList: true, subtree: true };
    observer.observe(document.body, observerConfig);
    ztmToggleSidebar();
};

// var courseSidebar = document.getElementById('courseSidebar');

// if (document.body.clientWidth >= 757) {
//     courseSidebar.classList.remove('collapse')
//     console.log('working')
// };

// ----------
// End Togglebar Section
// ----------

// This fires for the initial page load-up.
addEventListener("load", (e) => {
    focusOnVideo();
    console.log("Loaded:", e);
})

// TO-DO NOT FUNCTIONAL YET
// This is for subsequent move to next lessons without fully leaving the page (working with re-renders, etc)
// var vidObserver = new MutationObserver(function(muts) {
//     if ( document.contains(document.getElementsByClassName("lecture-attachment-type-video")[0]) ) {
//         focusOnVideo();
//     }
// })

// vidObserver.observe(document, {attributes: false, childList: true, characterData: false, subtree:true});
