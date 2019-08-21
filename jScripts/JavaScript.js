﻿$(document).ready(function () {
    //מכאן שינה משותפת
    var content_sleep = {
        "headline" : "נפרד אך קרוב",
        "b1": "יש להשכיב את התינוק לישון על משטח נפרד (עריסה או מיטה) לפחות למשך ששת החודשים הראשונים, ויש הממליצים עד גיל שנה.",
        "b2": "הצב את העריסה קרוב למיטת ההורים, כך שהתינוק נמצא בטווח הראייה. מיקום זה מקל על ההאכלה ומאפשר מעקב צמוד על התינוק.",
        "b3": "אין להשתמש בכל סוג של התקן שמיועד לקבע את תנוחה התינוק במיטה. אביזרים אלו מסוכנים וגורמים למוות. "
        
    };

    $("#sleep0").html(content_sleep.headline);
    $("#sleep1").html(content_sleep.b1);
    $("#sleep2").html(content_sleep.b2);
    $("#sleep3").html(content_sleep.b3);

    //עד כאן שינה משותפת

    // משטח שינה
    var content_playpen = {
        "headline": "משטח שינה",
        "b1": "אין להניח משטחים רכים מתחת לתינוק הישן כמו שמיכות פוך או כריות. ",
        "b2": "יש להשכיב את התינוק במיטה ריקה מחפצים ללא מצעים חופשיים, ללא משחקים, ללא מגיני ראש באיזור השינה.",
        "b3": "מומלץ להשתמש במיטות תינוק חדשות ולא ישנות ולוודא שהמיטה עומדת בדרישות מכון התקנים. בנוסף, חשוב לבדוק שלמיטה אין חלקים שבורים או חסרים.",
        "b4": "התקני ישיבה, כגון מושבי בטיחות, עגלות, נדנדות, מנשאים, וטיולונים, אינן מומלצים לשינה שגרתית, במיוחד אצל תינוקות צעירים. אין להשאיר תינוק ישן בכיסא רכב אחרי הנסיעה.",
        "b5": "יש להימנע מכיסוי ראש התינוק ופני התינוק (אין להשתמש בכובעים). כדאי להימנע משמיכות חופשיות באזור השינה שעלולות לכסות את פני התינוק מומלץ להשתמש בשקי שינה תקניים (מותאמים לגיל, משקל  ולטמפרטורה).",

    };

    $("#playpen0").html(content_playpen.headline);
    $("#playpen1").html(content_playpen.b1);
    $("#playpen2").html(content_playpen.b2);
    $("#playpen3").html(content_playpen.b3);
    $("#playpen4").html(content_playpen.b4);
    $("#playpen5").html(content_playpen.b5);



    //עד כאן משטח שינה

    //הנקה
    var content_feeding = {
        "headline": "הנקה",
        "b1": "הנקה בלעדית מעניקה הגנה של 50% מפני מוות בעריסה. תינוקות יונקים נמצאים בסיכון נמוך יותר מאשר תינוקות שניזונו מפורמולה בלבד. ",
        "b2": "כל כמות של הנקה מקטינה את הסיכון למוות בעריסה ועדיפה מאשר היעדר הנקה.",
        "b3": "אם מביאים את התינוק אל מיטת ההורים להנקה, יש להקפיד להחזירו למקום השינה הנפרד בתום ההנקה.",
    };

    $("#feeding0").html(content_feeding.headline);
    $("#feeding1").html(content_feeding.b1);
    $("#feeding2").html(content_feeding.b2);
    $("#feeding3").html(content_feeding.b3);

    //עד כאן הנקה

    //שכיבה על הגב
    var content_back = {
        "headline": "תנוחת שינה",
        "b1": "שינה על הבטן הינה גורם סיכון העיקרי ל-SIDS. כדי להקטין את הסיכון יש להשכיב תינוקות לישון  על הגב בלבד לכל סוגי השינה ביום ובלילה עד שהתינוק מגיע לגיל שנה. ",
        "b2": "שינה על הצד נמצאה מסוכנת באותה מידה כמו שינה על הבטן ולכן אינה מומלצת.",
        "b3": "תינוק אשר רגיל לישון על הגב ובאופן יוצא דופן מושכב לישון על הבטן (prone position), נמצא בסיכון גבוה יותר (עד פי 21)  ל - SIDS. ",
        "b4": "יש להשכיב פגים לישון על הגב מוקדם ככל האפשר בזמן ההשהייה ולפני השחרור מבית החולים. ",
        "b5": "אין צורך לתקן את תנוחת התינוק לאחר שהושכב לישון על הגב והתהפך בעצמו אל הבטן במהלך השינה. ",

    };

    $("#back0").html(content_back.headline);
    $("#back1").html(content_back.b1);
    $("#back2").html(content_back.b2);
    $("#back3").html(content_back.b3);
    $("#back4").html(content_back.b4);
    $("#back5").html(content_back.b5);
    $("#back6").html(content_back.b6);
    $("#back7").html(content_back.b7);

    //עד כאן שכיבה על הגב

    //מוצץ
    var content_ppacifier = {
        "headline": "מוצץ",
        "b1": "בתינוקות יונקים יש לדחות הצעת מוצץ עד התבססות הנקה סביבות גיל חודש.",
        "b2": "המוצץ צריך להיות נקי ויבש ואינו קשור לחוט. אין לחבר את המוצץ לצוואר התינוק או לחפץ כלשהו–כגון חוט, בגד, צעצוע רך או פריטים אחרים שעשויים להוות סיכון לחנק.",

    };

    $("#pacifier0").html(content_ppacifier.headline);
    $("#pacifier1").html(content_ppacifier.b1);
    $("#pacifier2").html(content_ppacifier.b2);


    //עד כאן מוצץ

    //עישון
    var content_smoking = {
        "headline": "עישון",
        "b1": "תינוקות שאימהותיהן עישנו במהלך ההריון, אפילו סיגריות בודדות, נמצאים בסיכון גבוה יותר למוות בעריסה (פי 4). ",
        "b2": "הסיכון למוות בעריסה גבוה במיוחד בשילוב עם גורמים נוספים כמו שינה על הבטן או שינה משותפת עם מבוגר מעשן.",
        "b3": "חשיפה לעישון לאחר הלידה מגבירה  את הסיכון  למוות בעריסה עד פי 5 (ביחס ישר לכמות הסיגריות שהאם מעשנת לידם).",
  
 
    };

    $("#smoking0").html(content_smoking.headline);
    $("#smoking1").html(content_smoking.b1);
    $("#smoking2").html(content_smoking.b2);
    $("#smoking3").html(content_smoking.b3);
    $("#smoking4").html(content_smoking.b4);
    $("#smoking5").html(content_smoking.b5);

    //עד כאן עישון

    //חום גוף
    var content_heat = {
        "headline6": "חום גוף",
        "b1": "מחקרים מצאו שיש קשר בין SIDS לשכבות רבות מדי של בגדים או שמיכות. תינוקות צריכים להיות לבושים בהתאם לסביבה, לא יותר משכבה אחת מעל כמות השכבות שהמבוגר לובש וחש בנוח.",
        "b2": "יש לשמור על טמפרטורה של 22-23 מעלות בחדרו של התינוק ולאוורר את חדרו בכל יום.",
        "b3": "הורים ומטפלים צריכים לחפש סימנים של התחממות יתר, כגון הזעה או חזה התינוק חם למגע.",
        "b4": "חשוב שהחדר יהיה מאוורר והתינוק ישכב על גבו. <br/> *אין ראיות מספיקות התומכות בשימוש במאוורר כאסטרטגיית הפחתת הסיכון לויסות הטמפרטורה",


    };

    $("#heat0").html(content_heat.headline6);
    $("#heat1").html(content_heat.b1);
    $("#heat2").html(content_heat.b2);
    $("#heat3").html(content_heat.b3);
    $("#heat4").html(content_heat.b4);
    $("#heat5").html(content_heat.b5);
    $("#heat6").html(content_heat.b6);

    //עד כאן חום 

    //אקרדיון

    var content_Questions = {
        "headline6": "שאלות נפוצות",
        "b1": "האם ניתן למנוע מוות בעריסה?",
        "b2": "אין אפשרות למנוע מות עריסה כיוון שאיננו יודעים מה גורם לו, ולא ניתן לזהות תינוקות בסיכון. עם זאת, ניתן להפחית את גורמי הסיכון למות עריסה.",
        "b3": "מתי להשכיב תינוק על הגב?",
        "b4": "יש להרגיל את התינוק לשכב על הגב בזמן שינה כבר מרגע הגיעו הביתה מבית היולדות. הדגש הוא על שכיבה על הגב בזמן שינה. בערנות מומלץ להשכיבו על הבטן בהשגחת מבוגר. ",
        "b5": "האם שכיבה על הגב גורמת לחנק?",
        "b6": "אין עלייה בתחלואה מכל סוג שהוא אם מקפידים על ההוראות ומשכיבים את התינוק על הגב בזמן השינה בלבד.",
        "b7": "מה עושים כשתינוק כבר מתהפך?",
        "b8": "זוהי המלצת האגודה האמריקנית לרפואת ילדים: כשהתינוק כבר מתהפך מהגב לבטן עדיין יש להשכיבו לישון על הגב, אך לאפשר לו לישון בתנוחה שבה יבחר לעצמו בהמשך.",
        "b9": "האם להשתמש באביזרים למיקום התינוק?",
        "b10": "האגודה האמריקנית לרפואת ילדים אינה תומכת בשימוש באביזרים המיועדים לשמור את ראש התינוק במקום הרצוי.",
        "b11": "האם מומלצת לינה במיטה משותפת?",
        "b12": "ההמלצת הוועדה האירופית למניעת מוות פתאומי בתינוקות היא לישון באותו חדר, אך לא באותה מיטה, עקב הסיכון שמבוגר ילחץ על התינוק או ימעוך אותו בזמן השינה.",
        "b13": "האם מוות בעריסה קורה רק בלילה?",
        "b14": "רוב המקרים אכן מתרחשים בלילה, אך מות עריסה עלול לקרות בכל זמן (לדוגמה, עלול לקרות גם בעגלה באמצע היום).",
        "b15": "היכן ניתן לעבור קורס עזרה ראשונה לתינוק?",
        "b16": "מחלקת ההדרכה של מד''א מעבירה קורסי החייאה לתינוקות בכל רחבי הארץ, וניתן לפנות אליהם ישירות בטלפון:<br/>מחלקת הדרכה – 03-6390396<br/>מוקד לאומי – 1700-500-430<br/>פקס – 03-6870494"
};

    $("#Questions0").html(content_Questions.headline6);
    $("#Questions1").html(content_Questions.b1);
    $("#Questions2").html(content_Questions.b2);
    $("#Questions3").html(content_Questions.b3);
    $("#Questions4").html(content_Questions.b4);
    $("#Questions5").html(content_Questions.b5);
    $("#Questions6").html(content_Questions.b6);
    $("#Questions7").html(content_Questions.b7);
    $("#Questions8").html(content_Questions.b8);
    $("#Questions9").html(content_Questions.b9);
    $("#Questions10").html(content_Questions.b10);
    $("#Questions11").html(content_Questions.b11);
    $("#Questions12").html(content_Questions.b12);
    $("#Questions13").html(content_Questions.b13);
    $("#Questions14").html(content_Questions.b14);
    $("#Questions15").html(content_Questions.b15);
    $("#Questions16").html(content_Questions.b16);
//עד כאן  אקורדיון
 

    // אודות 
    var content_about = {
      
        "b0": "אודות",
        "b1": "אתר ייעודי להנחיות לשינה בטוחה ומניעת גורמי סיכון למוות פתאומי בתינוקות, מוות בעריסה וסביבת שינה בטוחה",
        "b2": "צוות הפרוייקט: שיר דייקן ולאה אמצסלבסקי",
        "b3": " אופיין ופותח במסגרת פרויקט גמר וקורס תכנות 3 13217 תשע''ט",
        "b4": "מרצים:ד''ר רונן המר, לילך גל, רעות בכר וד''ר דן כהן-וקס",
        "b5": "הפקולטה לטכנולוגיות למידה",
        "b6": "מכון טכנולוגי חולון"

    };

 
    $("#about0").html(content_about.b0);
    $("#about1").html(content_about.b1);
    $("#about2").html(content_about.b2);
    $("#about3").html(content_about.b3);
    $("#about4").html(content_about.b4);
    $("#about5").html(content_about.b5);
    $("#about6").html(content_about.b6);
    //עד כאן אודות 


//רכיב אקרדיון
function toggleIcon(e) {
    $(e.target)
        .prev('.panel-heading')
        .find(".more-less")
        .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);


});

