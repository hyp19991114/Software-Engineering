/*
 * index.js
 * 熟悉前端开发相关技术 - 软件工程作业
 * 183401050225  黄远鹏
 */

// 根据考试课分数计算单科绩点
function calculateGradePoint(score) {
    if (score >= 60)
        return 2 + (score - 60) * 0.2
    else
        return 0
}

// 计算绩点
function calculateGPA() {
    subject = [
        { name: 'programmingScore', credit: 3 },
        { name: 'advMathScore', credit: 5.5 },
        { name: 'discMathScore', credit: 4 },
        { name: 'introductionScore', credit: 1.5 },
        { name: 'PEScore', credit: 1 }
    ]   // name: html中标签对应的id, credit: 单科学分
    sumProduct = 0   // Sum(学分*绩点)
    creditSum = 0   // Sum(学分)
    for (let i = 0; i < 3; i++) {   // 计算考试课部分
        let obj = document.getElementById(subject[i].name)
        let score = obj.value
        if (score == "" || score < 0 || score > 100)   // 输入的成绩非法
            return NaN
        let gradePoint = calculateGradePoint(score)   // 单科绩点
        sumProduct += subject[i].credit * gradePoint
        creditSum += subject[i].credit
    }
    for (let i = 3; i < 5; i++) {   // 计算考查课部分
        let obj = document.getElementById(subject[i].name)
        let index = obj.selectedIndex
        let gradePoint = parseFloat(obj.options[index].value)   // 单科绩点
        sumProduct += subject[i].credit * gradePoint
        creditSum += subject[i].credit
    }
    return sumProduct / creditSum   // GPA = Sum(学分*绩点) / Sum(学分)
}

// 在 html 页面中展示结果
function displayGPA() {
    let gpa = calculateGPA()
    if (isNaN(gpa))
        alert('请检查成绩是否填写错误')
    else
        alert('绩点为：' + gpa.toFixed(2))
}
