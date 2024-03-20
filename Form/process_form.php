<?php

// الحصول على المعلومات من النموذج
$studentName = $_POST['studentName'];
$courseName = $_POST['courseName'];
$rating = $_POST['rating'];
$comments = $_POST['comments'];

// إنشاء بريد إلكتروني
$subject = "تقييم جديد";
$body = "
    تم تقديم تقييم جديد من قبل الطالب: $studentName
    الدورة: $courseName
    التقييم: $rating
    التعليقات: $comments
";

// إرسال البريد الإلكتروني
mail("ahmedprogrammer2003@gmail.com", $subject, $body);

// عرض رسالة النجاح
echo "تم إرسال التقييم بنجاح!";

?>
