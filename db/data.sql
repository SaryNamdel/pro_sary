--------------------V
INSERT INTO Area
VALUES (1, N'מרכז' )
GO	
INSERT INTO Area
VALUES (2, N'דרום' )
GO	
INSERT INTO Area
VALUES (3, N'צפון' )
GO	
select* from Area
-----------------
-- 40 רשומות לדוגמה לדירות לפי מיקום עיר אמיתי
INSERT INTO Apartments VALUES (3, 1, 1, 3, 6, 0, 1, 0, 1, N'יחידת נופש בלב צפת', N'הר כנען 10 צפת', 32.9651, 35.4967, 1, 0, 0, 1, 1, 0, 250)
INSERT INTO Apartments VALUES (2, 1, 1, 4, 8, 1, 1, 1, 1, N'יחידה חדשה עם חניה פרטית', N'הארז 5 עכו', 32.9231, 35.0714, 0, 0, 1, 1, 0, 1, 280)
INSERT INTO Apartments VALUES (13, 1, 1, 5, 10, 2, 1, 1, 1, N'דירה מרוהטת בקרבת הים', N'אבן גבירול 100 תל אביב', 32.0809, 34.7817, 1, 1, 0, 1, 1, 1, 420)
INSERT INTO Apartments VALUES (1, 1, 1, 2, 4, 0, 0, 0, 1, N'יחידה בבניין שקט', N'הרב שך 18 בני־ברק', 32.0900, 34.8390, 0, 0, 0, 0, 0, 0, 190)
INSERT INTO Apartments VALUES (26, 1, 1, 6, 12, 2, 1, 1, 1, N'בית פרטי בירושלים', N'גבעת המבתר 3 ירושלים', 31.7798, 35.2137, 1, 0, 0, 1, 0, 1, 360)
INSERT INTO Apartments VALUES (19, 1, 1, 5, 10, 1, 0, 1, 1, N'דירה חדשה באשקלון', N'בן גוריון 45 אשקלון', 31.6691, 34.5746, 0, 0, 1, 0, 1, 0, 310)
INSERT INTO Apartments VALUES (12, 1, 1, 4, 7, 0, 0, 0, 0, N'יחידת קרקע שקטה', N'הנרקיס 7 חולון', 32.0150, 34.7748, 0, 0, 0, 0, 1, 0, 260)
INSERT INTO Apartments VALUES (6, 1, 1, 5, 9, 2, 1, 1, 1, N'יחידת אירוח עם נוף', N'הכרמל 12 חיפה', 32.8166, 34.9870, 1, 1, 1, 1, 1, 1, 380)
INSERT INTO Apartments VALUES (14, 1, 1, 3, 6, 0, 0, 0, 1, N'יחידה זוגית ביפו', N'יפו העתיקה 1 יפו', 32.0522, 34.7526, 1, 0, 0, 0, 0, 1, 250)
INSERT INTO Apartments VALUES (20, 1, 1, 5, 11, 1, 1, 1, 1, N'יחידת נופש בבאר שבע', N'ויצמן 4 באר שבע', 31.2518, 34.7913, 0, 1, 1, 0, 1, 1, 320)
INSERT INTO Apartments VALUES (7, 1, 1, 4, 8, 1, 1, 1, 1, N'צימר בטבריה ליד הכנרת', N'השושנים 6 טבריה', 32.7900, 35.5280, 1, 0, 0, 0, 1, 0, 270)
INSERT INTO Apartments VALUES (22, 1, 1, 5, 10, 2, 0, 0, 1, N'יחידה שקטה במודיעין', N'האורן 10 מודיעין', 31.8930, 34.9630, 0, 0, 1, 0, 1, 0, 290)
INSERT INTO Apartments VALUES (17, 1, 1, 6, 14, 2, 1, 0, 1, N'קוטג׳ בראשון לציון', N'שדרות משה דיין 33 ראשון לציון', 31.9696, 34.8061, 1, 0, 1, 0, 1, 1, 400)
INSERT INTO Apartments VALUES (4, 1, 1, 3, 6, 0, 0, 1, 0, N'יחידה באשדוד', N'הרצל 2 אשדוד', 31.8014, 34.6435, 0, 1, 0, 1, 0, 1, 250)
INSERT INTO Apartments VALUES (24, 1, 1, 4, 8, 1, 1, 0, 0, N'צימר בגולן', N'מושב מגדל עוז', 32.9023, 35.6881, 1, 1, 0, 1, 0, 0, 330)
INSERT INTO Apartments VALUES (8, 1, 1, 4, 9, 1, 1, 0, 1, N'יחידה מקסימה בנעריה', N'השיטה 4 נהריה', 33.0059, 35.0981, 1, 0, 1, 0, 1, 0, 310)
INSERT INTO Apartments VALUES (9, 1, 1, 3, 6, 0, 0, 1, 1, N'יחידת נופש בעכו', N'הצפצפה 6 עכו', 32.9262, 35.0887, 1, 0, 0, 0, 0, 1, 260)
INSERT INTO Apartments VALUES (10, 1, 1, 5, 12, 2, 1, 1, 1, N'דירה חדשה בבנימינה', N'האשל 12 בנימינה', 32.5192, 34.9524, 1, 1, 0, 1, 1, 1, 340)
INSERT INTO Apartments VALUES (11, 1, 1, 6, 14, 2, 1, 1, 1, N'יחידה במרכז נתניה', N'תל חי 19 נתניה', 32.3318, 34.8532, 1, 0, 1, 1, 0, 0, 370)
INSERT INTO Apartments VALUES (5, 1, 1, 3, 7, 1, 0, 0, 1, N'יחידת נופש עם נוף לים', N'הרצל 25 חוף הכרמל', 32.6564, 34.9350, 1, 0, 0, 0, 0, 1, 300)
INSERT INTO Apartments VALUES (15, 1, 1, 5, 11, 2, 1, 1, 1, N'דירה משופצת ברמת גן', N'הרא״ה 99 רמת גן', 32.0831, 34.8123, 0, 0, 1, 1, 0, 1, 330)
INSERT INTO Apartments VALUES (16, 1, 1, 4, 9, 1, 1, 0, 1, N'יחידה בפ״ת בקרבת תחבורה', N'הנרייטה סולד 7 פתח תקווה', 32.0873, 34.8872, 1, 1, 0, 0, 0, 0, 310)
INSERT INTO Apartments VALUES (18, 1, 1, 6, 13, 3, 1, 1, 1, N'דירה גדולה ברחובות', N'ויצמן 200 רחובות', 31.8948, 34.8113, 1, 0, 1, 1, 1, 0, 390)
INSERT INTO Apartments VALUES (21, 1, 1, 5, 10, 2, 0, 1, 0, N'יחידת קרקע באילת', N'שדרות התמרים 88 אילת', 29.5569, 34.9519, 1, 1, 0, 0, 1, 1, 430)
INSERT INTO Apartments VALUES (23, 1, 1, 3, 6, 0, 0, 0, 1, N'דירה בבית שמש', N'זבולון 9 בית שמש', 31.7490, 35.0020, 0, 0, 0, 1, 0, 1, 270)
INSERT INTO Apartments VALUES (25, 1, 1, 4, 8, 1, 1, 1, 0, N'יחידה במרכז טירה', N'הדקל 2 טירה', 32.2510, 34.9530, 1, 1, 0, 0, 1, 0, 310)
INSERT INTO Apartments VALUES (2, 1, 1, 6, 15, 3, 1, 1, 1, N'דירה מהממת בעכו ליד הים', N'שדרות הים 7 עכו', 32.9233, 35.0712, 1, 1, 1, 1, 1, 1, 420)
INSERT INTO Apartments VALUES (6, 1, 1, 4, 9, 1, 0, 0, 1, N'יחידה בקריית חיים', N'הברוש 3 חיפה', 32.8071, 34.9861, 0, 0, 1, 0, 0, 1, 300)
INSERT INTO Apartments VALUES (3, 1, 1, 5, 11, 2, 1, 1, 0, N'צימר בצפת עם נוף לגליל', N'אברמוביץ 4 צפת', 32.9645, 35.4964, 1, 0, 0, 1, 0, 0, 350)
INSERT INTO Apartments VALUES (13, 1, 1, 6, 14, 3, 1, 1, 1, N'פנטהאוז בתל אביב', N'שדרות רוטשילד 1 תל אביב', 32.0631, 34.7707, 1, 1, 1, 1, 1, 1, 690)
INSERT INTO Apartments VALUES (26, 1, 1, 3, 6, 0, 0, 0, 0, N'יחידה זולה בירושלים', N'הנביאים 10 ירושלים', 31.7780, 35.2139, 0, 0, 0, 0, 0, 0, 200)
INSERT INTO Apartments VALUES (1, 1, 1, 4, 8, 1, 1, 0, 1, N'יחידת אירוח בבני ברק', N'חזון איש 10 בני ברק', 32.0902, 34.8391, 0, 0, 1, 1, 0, 1, 270)
INSERT INTO Apartments VALUES (10, 1, 1, 5, 12, 2, 1, 1, 1, N'בית נופש חדש בבנימינה', N'הדקל 5 בנימינה', 32.5190, 34.9520, 1, 1, 0, 1, 1, 1, 360)
INSERT INTO Apartments VALUES (11, 1, 1, 6, 14, 3, 1, 0, 1, N'יחידה בנתניה', N'אלוף שדה 7 נתניה', 32.3312, 34.8531, 0, 0, 1, 1, 1, 0, 330)
INSERT INTO Apartments VALUES (8, 1, 1, 3, 7, 0, 0, 0, 1, N'יחידת נופש בנעריה', N'הרקפת 12 נהריה', 33.0062, 35.0990, 1, 0, 0, 0, 0, 1, 280)
select* from Apartments
----------------------V
-- הכנסת 40 שוכרים לדוגמה
INSERT INTO Renters (apartmentId, lastName, firstName, phone, email, pwd) VALUES
(1, N'כהן', N'משה', '0501234501', 'moshe1@rent.com', 'pass1'),
(2, N'לוי', N'דוד', '0501234502', 'david2@rent.com', 'pass2'),
(3, N'ישראל', N'יוסף', '0501234503', 'yosef3@rent.com', 'pass3'),
(4, N'פרץ', N'אביב', '0501234504', 'aviv4@rent.com', 'pass4'),
(5, N'מזרחי', N'איתן', '0501234505', 'eitan5@rent.com', 'pass5'),
(6, N'דיין', N'שמעון', '0501234506', 'shimon6@rent.com', 'pass6'),
(7, N'אוחיון', N'חיים', '0501234507', 'haim7@rent.com', 'pass7'),
(8, N'עמר', N'ציון', '0501234508', 'zion8@rent.com', 'pass8'),
(9, N'שטרית', N'יעקב', '0501234509', 'yaakov9@rent.com', 'pass9'),
(10, N'חזן', N'אריאל', '0501234510', 'ariel10@rent.com', 'pass10'),
(11, N'סבן', N'רפאל', '0501234511', 'rafael11@rent.com', 'pass11'),
(12, N'אברג׳יל', N'אורי', '0501234512', 'uri12@rent.com', 'pass12'),
(13, N'מלכה', N'דניאל', '0501234513', 'daniel13@rent.com', 'pass13'),
(14, N'סויסה', N'רועי', '0501234514', 'roi14@rent.com', 'pass14'),
(15, N'חדד', N'ברק', '0501234515', 'barak15@rent.com', 'pass15'),
(16, N'אלמליח', N'מתן', '0501234516', 'matan16@rent.com', 'pass16'),
(17, N'חיון', N'אייל', '0501234517', 'eyal17@rent.com', 'pass17'),
(18, N'כהן', N'עדי', '0501234518', 'adi18@rent.com', 'pass18'),
(19, N'ביטון', N'אופיר', '0501234519', 'ofir19@rent.com', 'pass19'),
(20, N'קראדי', N'עמית', '0501234520', 'amit20@rent.com', 'pass20'),
(21, N'כהן', N'אלעד', '0501234521', 'elad21@rent.com', 'pass21'),
(22, N'לוי', N'אלי', '0501234522', 'eli22@rent.com', 'pass22'),
(23, N'שושן', N'אור', '0501234523', 'or23@rent.com', 'pass23'),
(24, N'רפאלי', N'שחר', '0501234524', 'shahar24@rent.com', 'pass24'),
(25, N'אלבז', N'ישי', '0501234525', 'ishai25@rent.com', 'pass25'),
(26, N'אוחנה', N'מאיר', '0501234526', 'meir26@rent.com', 'pass26'),
(27, N'נחמני', N'נדב', '0501234527', 'nadav27@rent.com', 'pass27'),
(28, N'שדה', N'תומר', '0501234528', 'tomer28@rent.com', 'pass28'),
(29, N'קידר', N'נועם', '0501234529', 'noam29@rent.com', 'pass29'),
(30, N'טויטו', N'יאיר', '0501234530', 'yair30@rent.com', 'pass30'),
(31, N'סלמה', N'לירון', '0501234531', 'liron31@rent.com', 'pass31'),
(32, N'דנינו', N'דקל', '0501234532', 'dekel32@rent.com', 'pass32'),
(33, N'שרון', N'עומר', '0501234533', 'omer33@rent.com', 'pass33'),
(34, N'חג׳ג׳', N'אלון', '0501234534', 'alon34@rent.com', 'pass34'),
(35, N'טולדנו', N'זיו', '0501234535', 'ziv35@rent.com', 'pass35')

SELECT *  FROM CUSTOMERS 

-----------------------------V
-- נניח שיש לך 35 לקוחות בקודים 1 עד 35
DECLARE @i INT = 41
WHILE @i < 80
BEGIN
	INSERT INTO CustomerAndApartment (apartmentId, custId, rentId, dateIncoming, dateExit)
	VALUES (
		1 + @i,         -- apartmentId
		41 + @i,          -- custId
		36 + @i,         -- rentId
		DATEADD(DAY, @i, '2025-08-01'),
		DATEADD(DAY, @i + 3, '2025-08-01')
	)
	SET @i += 1
END
------------------------
DECLARE @rows   INT = 39;   -- 41..79 כולל = 39 רשומות
DECLARE @iStart INT = 41;   -- לנוחיות בחישוב תאריכים

DECLARE @i INT = 0;
WHILE @i < @rows
BEGIN
    DECLARE @step INT = @iStart + @i;

    INSERT INTO dbo.CustomerAndApartment (apartmentId, custId, rentId, dateIncoming, dateExit)
    VALUES (
        1  + (@step % 35),     -- apartmentId בטווח 1–35
        41 + (@step % 40),     -- custId     בטווח 41–80
        36 + (@step % 35),     -- rentId     בטווח 36–70
        DATEADD(DAY, @step,     CONVERT(date,'2025-08-01')),
        DATEADD(DAY, @step + 3, CONVERT(date,'2025-08-01'))
    );

    SET @i += 1;
END
select * from CustomerAndApartment
---------------------------------
select * from Apartments
select * from Area
select * from Cities
select * from CustomerAndApartment
select * from Customers
select * from Images
select * from Renters
select * from RentersAndApartment

---------------------------V RentersAndApartment
DECLARE @rows   INT = 34;   -- כמו j=36..69 (34 רשומות)
DECLARE @jStart INT = 36;   -- לנוחיות חישוב התאריכים

DECLARE @j INT = 0;
WHILE @j < @rows
BEGIN
    DECLARE @step INT = @jStart + @j;

    INSERT INTO dbo.RentersAndApartment (apartmentId, rentId, custId, dateIncoming, dateExit)
    VALUES (
        1  + (@step % 35),     -- apartmentId  בטווח 1..35
        36 + (@step % 35),     -- rentId       בטווח 36..70
        41  + (@step % 46),     -- custId       בטווח 1..46 (שני אם אצלך שונה)
        DATEADD(DAY, @step + 5,  CONVERT(date,'2025-08-01')),
        DATEADD(DAY, @step + 9,  CONVERT(date,'2025-08-01'))
    );

    SET @j += 1;
END

select * from RentersAndApartment
------------------------------------V
DECLARE @aptId INT = 1
DECLARE @imgCounter INT = 1
WHILE @aptId <= 35
BEGIN
	INSERT INTO Images (apartmentId, imgName) VALUES (@aptId, 'home' + CAST(@imgCounter AS varchar) + '.jpg')
	SET @imgCounter += 1
	INSERT INTO Images (apartmentId, imgName) VALUES (@aptId, 'home' + CAST(@imgCounter AS varchar) + '.jpg')
	SET @imgCounter += 1
	INSERT INTO Images (apartmentId, imgName) VALUES (@aptId, 'home' + CAST(@imgCounter AS varchar) + '.jpg')
	SET @imgCounter += 1
	INSERT INTO Images (apartmentId, imgName) VALUES (@aptId, 'home' + CAST(@imgCounter AS varchar) + '.jpg')
	SET @imgCounter += 1

	SET @aptId += 1
END
select * from Images

-------------------------------------------------------------V
INSERT INTO Cities
VALUES ( 1, 1,N'בני-ברק')
GO	
INSERT INTO Cities
VALUES ( 2,2,N'ערד')
GO	
INSERT INTO Cities
VALUES (3 ,3,N'צפת')
GO	
INSERT INTO Cities
VALUES ( 4,3,N'אשדוד')
GO	
INSERT INTO Cities
VALUES (5,3,N'חצור')
GO
INSERT INTO Cities
VALUES ( 6, 3,N'חיפה')
GO	
INSERT INTO Cities
VALUES ( 7,3,N'טבריה')
GO	
INSERT INTO Cities
VALUES (8 ,3,N'נהריה')
GO	
INSERT INTO Cities
VALUES ( 9,3,N'עכו')
GO	
INSERT INTO Cities
VALUES (10,3,N'בנימינה')
GO
INSERT INTO Cities
VALUES ( 11, 1,N'נתניה')
GO	
INSERT INTO Cities
VALUES ( 12,1,N'הרצליה')
GO	
INSERT INTO Cities
VALUES (13 ,1,N'תל אביב')
GO	
INSERT INTO Cities
VALUES ( 14,1,N'יפו')
GO	
INSERT INTO Cities
VALUES (15,1,N'רמת גן')
GO
INSERT INTO Cities
VALUES ( 16, 1,N'פתח תקווה')
GO	
INSERT INTO Cities
VALUES ( 17,1,N'ראשון לציון')
GO	
INSERT INTO Cities
VALUES (18 ,1,N'רחובות')
GO	
INSERT INTO Cities
VALUES ( 19,2,N'אשקלון')
GO	
INSERT INTO Cities
VALUES (20,2,N'באר שבע')
GO
INSERT INTO Cities
VALUES ( 21, 2,N'אילת')
GO	
INSERT INTO Cities
VALUES ( 22,1,N'מודיעין')
GO	
INSERT INTO Cities
VALUES (23 ,1,N'בית שמש')
GO	
INSERT INTO Cities
VALUES ( 24,3,N'מגדל העמק')
GO	
INSERT INTO Cities
VALUES (25,3,N'טירת הכרמל')
GO
INSERT INTO Cities
VALUES (26,1,N'ירושלים')
GO
select* from Cities
---------------------------------------------V

INSERT INTO Customers VALUES (1, N'כהן', N'משה', '0501234001', 'moshe1@gmail.com', 'moshe001')      -- בני ברק
INSERT INTO Customers VALUES (2, N'לוי', N'דוד', '0501234002', 'david2@gmail.com', 'david002')       -- עכו
INSERT INTO Customers VALUES (3, N'פרידמן', N'יעקב', '0501234003', 'yaakov3@gmail.com', 'yaakov003') -- צפת
INSERT INTO Customers VALUES (4, N'מלכה', N'רפאל', '0501234004', 'rafael4@gmail.com', 'rafael004')   -- אשדוד
INSERT INTO Customers VALUES (5, N'רוזן', N'אורי', '0501234005', 'uri5@gmail.com', 'uri005')         -- חיפה
INSERT INTO Customers VALUES (6, N'שטרן', N'דן', '0501234006', 'dan6@gmail.com', 'dan006')           -- חולון
INSERT INTO Customers VALUES (7, N'אוחנה', N'מתן', '0501234007', 'matan7@gmail.com', 'matan007')     -- טבריה
INSERT INTO Customers VALUES (8, N'חדד', N'יאיר', '0501234008', 'yair8@gmail.com', 'yair008')        -- אילת
INSERT INTO Customers VALUES (9, N'זוהר', N'עוז', '0501234009', 'oz9@gmail.com', 'oz009')            -- בני ברק
INSERT INTO Customers VALUES (10, N'אביטן', N'ישי', '0501234010', 'ishai10@gmail.com', 'ishai010')   -- חיפה
INSERT INTO Customers VALUES (11, N'בן חיים', N'אופיר', '0501234011', 'ofir11@gmail.com', 'ofir011')-- קרית גת
INSERT INTO Customers VALUES (12, N'בנימין', N'ליאור', '0501234012', 'lior12@gmail.com', 'lior012') -- רחובות
INSERT INTO Customers VALUES (13, N'ברכה', N'עידן', '0501234013', 'idan13@gmail.com', 'idan013')     -- תל אביב
INSERT INTO Customers VALUES (14, N'סויסה', N'יואל', '0501234014', 'yoel14@gmail.com', 'yoel014')    -- יפו
INSERT INTO Customers VALUES (15, N'נחמני', N'איתן', '0501234015', 'eitan15@gmail.com', 'eitan015')  -- חדרה
INSERT INTO Customers VALUES (16, N'קמחי', N'שמעון', '0501234016', 'shimon16@gmail.com', 'shimon016')-- רמת גן
INSERT INTO Customers VALUES (17, N'רפאלי', N'עמית', '0501234017', 'amit17@gmail.com', 'amit017')    -- פתח תקווה
INSERT INTO Customers VALUES (18, N'ששון', N'אלון', '0501234018', 'alon18@gmail.com', 'alon018')     -- ראשון לציון
INSERT INTO Customers VALUES (19, N'ביטון', N'אייל', '0501234019', 'eyal19@gmail.com', 'eyal019')    -- באר שבע
INSERT INTO Customers VALUES (20, N'סלומון', N'נדב', '0501234020', 'nadav20@gmail.com', 'nadav020')  -- בית שמש
INSERT INTO Customers VALUES (21, N'חיון', N'שחר', '0501234021', 'shahar21@gmail.com', 'shahar021')  -- גבעת שמואל
INSERT INTO Customers VALUES (22, N'טויטו', N'תומר', '0501234022', 'tomer22@gmail.com', 'tomer022')  -- מודיעין
INSERT INTO Customers VALUES (23, N'גולדשטיין', N'ניר', '0501234023', 'nir23@gmail.com', 'nir023')   -- ירושלים
INSERT INTO Customers VALUES (24, N'שדה', N'אדיר', '0501234024', 'adir24@gmail.com', 'adir024')      -- עפולה
INSERT INTO Customers VALUES (25, N'עזרן', N'זיו', '0501234025', 'ziv25@gmail.com', 'ziv025')         -- צפת
INSERT INTO Customers VALUES (26, N'טבול', N'רועי', '0501234026', 'roi26@gmail.com', 'roi026')        -- עכו
INSERT INTO Customers VALUES (1, N'כהן', N'גדי', '0501234027', 'gadi27@gmail.com', 'gadi027')         -- בני ברק
INSERT INTO Customers VALUES (3, N'הלוי', N'מאיר', '0501234028', 'meir28@gmail.com', 'meir028')       -- צפת
INSERT INTO Customers VALUES (13, N'קורן', N'ברק', '0501234029', 'barak29@gmail.com', 'barak029')     -- תל אביב
INSERT INTO Customers VALUES (6, N'אסולין', N'לירון', '0501234030', 'liron30@gmail.com', 'liron030')  -- חולון
INSERT INTO Customers VALUES (17, N'שמש', N'דקל', '0501234031', 'dekel31@gmail.com', 'dekel031')      -- פתח תקווה
INSERT INTO Customers VALUES (12, N'אדרי', N'אורן', '0501234032', 'oren32@gmail.com', 'oren032')      -- רחובות
INSERT INTO Customers VALUES (20, N'ברודי', N'עמוס', '0501234033', 'amos33@gmail.com', 'amos033')    -- באר שבע
INSERT INTO Customers VALUES (26, N'אלמליח', N'שגב', '0501234034', 'segev34@gmail.com', 'segev034')  -- ירושלים
INSERT INTO Customers VALUES (4, N'דרעי', N'אלעד', '0501234035', 'elad35@gmail.com', 'elad035')       -- אשדוד
INSERT INTO Customers VALUES (1, N'כהן', N'נעם', '0501234036', 'noam36@gmail.com', 'noam036')         -- בני ברק
INSERT INTO Customers VALUES (5, N'זינו', N'טל', '0501234037', 'tal37@gmail.com', 'tal037')           -- חיפה
INSERT INTO Customers VALUES (19, N'פרץ', N'ליאב', '0501234038', 'liav38@gmail.com', 'liav038')       -- באר שבע
INSERT INTO Customers VALUES (23, N'סבח', N'אלי', '0501234039', 'eli39@gmail.com', 'eli039')          -- ירושלים
INSERT INTO Customers VALUES (7, N'דנינו', N'יהונתן', '0501234040', 'yonatan40@gmail.com', 'yonatan040')-- טבריה
-------------------------
ALTER TABLE Customers
ALTER COLUMN firstName NVARCHAR(50);

ALTER TABLE Customers
ALTER COLUMN lastName NVARCHAR(50);


UPDATE Renters
SET username = 'renter_' + CAST(rentId AS NVARCHAR(10));

UPDATE Customers
SET username = 'renter_' + CAST(custId AS NVARCHAR(10));

