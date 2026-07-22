class ComingSoonVideo extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="coming-soon-wrapper">
                <video autoplay loop muted playsinline>
                    <!-- הנה השינוי הקטן: שמתי רק לוכסן (/) בלי הנקודה בהתחלה -->
                    <source src="/comingsoon.mp4" type="video/mp4">
                    הדפדפן שלך אינו תומך בניגון וידאו.
                </video>
            </div>
        `;
    }
}
// כאן אנחנו מגדירים את שם התגית שתוכל להדביק בדפים
customElements.define('coming-soon-video', ComingSoonVideo);