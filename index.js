const subscriptionRef = document.querySelector('.subscription-btn');
const videoDescRef = document.querySelector('.video-desc');
const showMoreOrLessRef = document.querySelector('.video-desc-show-more');

//global booleans
let showFull = false;

function toggleSubscription(event, isNotSubscribed) {
    subscriptionRef.textContent = isNotSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE';
    event.target.classList.remove(isNotSubscribed ? 'subscribe' : 'subscribed');
    event.target.classList.add(isNotSubscribed ? 'subscribed' : 'subscribe');
}

function toggleShowMoreOrLessDesc(showFull) {
    const defaultDesc = 'How do you contribute to open source?  In this video, I\'ll describe the easiest way to make a simple contribution to an open source project -- without using the command line, a text editor, "forking a repo", or even touching Git outside of Github.  I\'ll also describe what kinds of';
    if(showFull) {
        return defaultDesc;
    }
    return defaultDesc + ' contributions open source software projects are typically looking for.  As an example, I use submitting a student solution to a web development exercise from The Odin Project, a free online curriculum for learning web development with Ruby on Rails.  You can find more information about that project at http://theodinproject.com.';
}

//Click events
subscriptionRef.onclick = (e) => {
    const currentClass = e.target.classList.contains('subscribe');
    toggleSubscription(e, currentClass);
}

showMoreOrLessRef.onclick = (e) => {
    const newDesc = toggleShowMoreOrLessDesc(showFull);
    videoDescRef.textContent = newDesc;
    showFull = !showFull;
    if(showFull){
        return e.target.textContent = 'SHOW LESS';
    } 
    return e.target.textContent = 'SHOW MORE';
}
