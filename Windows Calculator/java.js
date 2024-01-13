var pre = '';
var cur = '';
var a, b, ans;
var check = false;
const inputBox = document.getElementById('pass')
function nine() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '9'
        document.getElementById('current').value = cur;
    }

}
function eight() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '8'
        document.getElementById('current').value = cur;
    }

}
function seven() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '7'
        document.getElementById('current').value = cur;
    }

}
function six() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '6'
        document.getElementById('current').value = cur;
    }

}
function five() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '5'
        document.getElementById('current').value = cur;
    }

}
function four() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '4'
        document.getElementById('current').value = cur;
    }

}
function three() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '3'
        document.getElementById('current').value = cur;
    }

}
function two() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '2'
        document.getElementById('current').value = cur;
    }

}
function one() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '1'
        document.getElementById('current').value = cur;
    }

}
function zero() {
    
    if (check == true){
        pre = ''
        check = false
    }
    if (cur.length == 3 || cur.length == 7 || cur.length == 11) {
        cur += ','
        document.getElementById('current').value = cur;
    }
    if (cur.length == 15) {
    }
    else {
        cur += '0'
        document.getElementById('current').value = cur;
    }

}

function erace() {
    if (cur == '') {

    }
    else if (cur[cur.length - 2] == ',') {
        cur = cur.slice(0, -2)
        document.getElementById('current').value = cur;

    }
    else {
        cur = cur.slice(0, -1)
        document.getElementById('current').value = cur;

    }

}

function mul() {
    if (pre == '') {
        pre = cur
        cur = ''
        pre += ' x '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if (check == true) {
        pre += ' x '
        document.getElementById('previous').value = pre;
        check = false
    }
    if (cur != '' && check == false) {
        a = parseInt(pre.replace( /[^\d.]/g, ''));
        b = parseInt(cur.replace( /[^\d.]/g, ''));
        ans = a * b
        pre = ans
        pre += ' x '
        document.getElementById('current').value = ans

        document.getElementById('previous').value = pre;
        cur = ''
    }
    else if (pre[pre.length - 2] == '+' || pre[pre.length - 2] == 'x' || pre[pre.length - 2] == '/' || pre[pre.length - 2] == '-') {
        pre = pre.slice(0, -3)
        pre += ' x '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if(pre.indexOf('.') !== -1){
        pre += ' x '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
}
function sub() {
    if (pre == '') {
        pre = cur
        cur = ''
        pre += ' - '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if (check == true) {
        pre += ' - '
        document.getElementById('previous').value = pre;
        check = false
    }
    if (cur != '' && check == false) {
        a = parseInt(pre.replace( /[^\d.]/g, ''));
        b = parseInt(cur.replace( /[^\d.]/g, ''));
        ans = a - b
        pre = ans
        pre += ' - '
        document.getElementById('current').value = ans

        document.getElementById('previous').value = pre;
        cur = ''
    }
    else if (pre[pre.length - 2] == '+' || pre[pre.length - 2] == 'x' || pre[pre.length - 2] == '/' || pre[pre.length - 2] == '-') {
        pre = pre.slice(0, -3)
        pre += ' - '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if(pre.indexOf('.') !== -1){
        pre += ' - '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
}
function div() {
    if (pre == '') {
        pre = cur
        cur = ''
        pre += ' / '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if (check == true) {
        pre += ' / '
        document.getElementById('previous').value = pre;
        check = false
    }
    if (cur != '' && check == false) {
        a = parseInt(pre.replace( /[^\d.]/g, ''));
        b = parseInt(cur.replace( /[^\d.]/g, ''));
        ans = a / b
        pre = ans
        pre += ' / '
        document.getElementById('current').value = ans

        document.getElementById('previous').value = pre;
        cur = ''
    }
    else if (pre[pre.length - 2] == '+' || pre[pre.length - 2] == 'x' || pre[pre.length - 2] == '/' || pre[pre.length - 2] == '-') {
        pre = pre.slice(0, -3)
        pre += ' / '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if(pre.indexOf('.') !== -1){
        pre += ' / '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
}
function add() {
    if (pre == '') {
        pre = cur
        cur = ''
        pre += ' + '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if (check == true) {
        pre += ' + '
        document.getElementById('previous').value = pre;
        check = false
    }
    if (cur != '' && check == false) {
        a = parseInt(pre.replace( /[^\d.]/g, ''));
        b = parseInt(cur.replace( /[^\d.]/g, ''));
        ans = a + b
        pre = ans
        pre += ' + '
        document.getElementById('current').value = ans

        document.getElementById('previous').value = pre;
        cur = ''
    }
    else if (pre[pre.length - 2] == '+' || pre[pre.length - 2] == 'x' || pre[pre.length - 2] == '/' || pre[pre.length - 2] == '-') {
        pre = pre.slice(0, -3)
        pre += ' + '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
    else if(pre.indexOf('.') !== -1){
        pre += ' + '
        pre = pre.replace(/,/g, '');
        document.getElementById('previous').value = pre;
    }
}
// function percentage(){
//     a = parseInt(document.getElementById('current').value)
//     ans = a / 100
//     document.getElementById('current').value = ans
//     document.getElementById('previous').value = ans;
//     pre = ans
//     console.log(pre)
//     cur = ''
// }
function equal() {
    a = parseInt(pre.replace( /[^\d.]/g, ''));
    b = parseInt(cur.replace( /[^\d.]/g, ''));
    if (pre[pre.length - 2] == '+') {
        ans = a + b
    }
    else if (pre[pre.length - 2] == '/') {
        ans = a / b
    }
    else if (pre[pre.length - 2] == 'x') {
        ans = a * b
    }
    else if (pre[pre.length - 2] == '-') {
        ans = a - b
    }
    pre += cur
    document.getElementById('current').value = ans

    document.getElementById('previous').value = pre;
    cur = ''
    pre = ans.toString()
    check = true;
}
function clear_cur(){
    cur = ''
    document.getElementById('current').value = '0'
}
function clear_all(){

    cur = ''
    pre = ''
    document.getElementById('current').value = '0'
    document.getElementById('previous').value = ''
}


