const logTimer = (new Date()).getTime();

export default (message) => {
    let time = '[' + (((new Date()).getTime() - logTimer) / 1000) + ']';
    console.log(time + ' ' + message);
}
