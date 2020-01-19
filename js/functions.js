const data = {
    week: {
        chart: "38m",
        moreMins: 12,
        currentStreak: 4,
        bestStreak: 12,
        leaderboard: [
            { lp: 1, person: "Walter Wynne", arrow: "", distance: "105m" },
            { lp: 2, person: "Annabel Ferdinand", circle: "", distance: "52m" },
            { lp: 3, person: "Marty McFly", arrow: "", distance: "50m" },
            { lp: 7, person: "You!", arrow: "", distance: "38m" },
        ],
    },
    month: {
        chart: "12m",
        moreMins: 186,
        currentStreak: 7,
        bestStreak: 44,
        leaderboard: [
            { lp: 1, person: "Annabel Ferdinand", arrow: "", distance: "520m" },
            { lp: 2, person: "Marty McFly", arrow: "", distance: "500m" },
            { lp: 3, person: "Walter Wynne", arrow: "", distance: "145m" },
            { lp: 5, person: "You!", arrow: "", distance: "130m" },
        ],
    },
}

function generateDom(data) {
    $("#leaderboardList").html("")
    $("#chart").text(data.chart)
    $(".moreMins").text(data.moreMins)
    $("#currentStreak").text(data.currentStreak)
    $("#bestStreak").text(data.bestStreak)
    const stroke = (490 * parseInt(data.chart)) / (parseInt(data.chart) + data.moreMins)
    $("#stroke").attr("stroke-dasharray", `${stroke},490`)
    data.leaderboard.forEach(score => {
        const elemScore = $("<div/>", { class: score.person === "You!" ? "score ative" : "score" })

        Object.entries(score).forEach(arrKeyValue => {
            const key = arrKeyValue[0]
            const value = arrKeyValue[1]

            const elemTest = $(`<div class="${key}">${value}</div>`)
            $(elemScore).append(elemTest)
        })
        $("#leaderboardList").append(elemScore)
    })
}

$(document).ready(() => {
    generateDom(data.week)
    $("#selectPeriod").change(event => {
        const period = event.target.value
        generateDom(data[period])
    })
})
