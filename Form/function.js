function submitForm() {
    var studentName = document.getElementById('studentName').value;
    var courseName = document.getElementById('courseName').value;
    var rating = document.getElementById('rating').value;
    var comments = document.getElementById('comments').value;

    // الحصول على اتجاه النص الحالي
    var dir = getComputedStyle(document.documentElement).direction;

    // قلب النص إذا كان الاتجاه من اليمين إلى اليسار
    if (dir === 'rtl') {
        studentName = studentName.split('').reverse().join('');
        courseName = courseName.split('').reverse().join('');
        comments = comments.split('').reverse().join('');
    }

    var formData = new FormData();
    formData.append('studentName', studentName);
    formData.append('courseName', courseName);
    formData.append('rating', rating);
    formData.append('comments', comments);

    // إرسال البيانات باستخدام fetch
    fetch('process_form.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('حدث خطأ أثناء محاولة تقديم التقييم. يرجى المحاولة مرة أخرى.');
        }
        return response.text();
    })
    .then(data => {
        // عرض رسالة النجاح في نافذة منبثقة
        alert("تم تقديم التقييم!\n\n" +
            "الطالب: " + studentName + "\n" +
            "الدورة: " + courseName + "\n" +
            "التقييم: " + rating + "\n" +
            "التعليقات: " + comments);

        // إضافة تأثير بسيط - تغيير لون خلفية الصفحة بعد تقديم التقييم
        document.body.style.backgroundColor = "#e6ffe6";
    })
    .catch(error => {
        // عرض رسالة الخطأ في نافذة منبثقة
        alert(error.message);
    });
}
