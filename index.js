async function getTeacherEmail(teacher, terms, interval) {
  // 程序配置（不要随意修改，除非你知道你在做什么）
  const POOL = [
    "241",
    "221",
    "202",
    "201",
    "281",
    "261",
    "181",
    "161",
    "141",
    "121",
    "101",
    "81",
    "62",
    "61",
    "39",
    "35",
    "23",
    "38",
    "20",
    "43",
    "21",
    "34",
    "42",
    "37",
    "17",
    "41",
    "18",
    "33",
    "22",
    "9",
    "19",
    "40",
    "36",
    "32",
    "10",
    "24",
    "44",
    "25",
    "11",
    "47",
    "46",
    "45",
    "27",
    "51",
    "50",
    "12",
    "26",
    "49",
    "48",
    "8",
    "7",
    "31",
    "6",
    "16",
    "5",
    "30",
    "4",
    "15",
    "3",
    "29",
    "2",
    "1",
    "14",
    "28",
    "53",
    "52",
    "13",
  ];

  // 首先获取学生查询的标识码
  const queryDoc = await $.ajax({
    url: "https://jw.ustc.edu.cn/for-std/lesson-search",
  });
  const student_id = queryDoc.match(
    /\/for-std\/lesson-search\/index\/(\d*)/
  )[1];

  // 查找老师教的课程 id
  const course_id = await (async () => {
    for (let i = 0; i < terms; i++) {
      const course_url = `https://jw.ustc.edu.cn/for-std/lesson-search/semester/${POOL[i]}/search/${student_id}?teacherNameLike=${teacher}`;
      const course_info = await $.ajax({ url: course_url });
      if (course_info.data.length) {
        return course_info.data[0].id;
      } else {
        console.log(`第 ${i + 1} 个学期查询失败，正在等待...`);
        await new Promise((r) => setTimeout(r, interval * 1000));
      }
    }
  })();

  // 根据课程 id，查询邮箱
  const email_url = `https://jw.ustc.edu.cn/ws/course-adjustment-apply/get-teacher-info?lessonId=${course_id}`;
  const email_res = await $.ajax({ url: email_url });

  email_res.forEach((object) => {
    if (object[teacher]) {
      alert(object[teacher]);
    }
  });
}

// 使用示例：
getTeacherEmail("王xx", 10, 3);
// 依次为老师姓名，查询最大学期数，每次查询间隔（单位秒，为了防止流量太大被封）
