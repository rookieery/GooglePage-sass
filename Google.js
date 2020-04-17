const box = document.getElementsByClassName('box-text')[0];
box.addEventListener('focus', function () {
    if (this.value == '在 Google 上搜索，或者输入一个网址') {
        this.value = '';
    }
});
box.addEventListener('blur',function() {
    if (this.value == '') {
        this.value = '在 Google 上搜索，或者输入一个网址';
    }
});