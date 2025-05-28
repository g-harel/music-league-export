const roundTitle = document.title.split("|")[2];
const submissions = [...document.querySelectorAll('div[id^="spotify:track:"]')];

const results = submissions.map((sub) => {
    const songContainer = sub.children[0];
    const votesContainer = sub.children[2];

    const submitter = [...songContainer.querySelectorAll("h6")][2].innerText;
    const song = [...songContainer.querySelectorAll("p")].map((n) =>
        n.innerText
    ).slice(0, 2).join(" - ");

    const voteContainers = [...votesContainer.querySelectorAll(".row")];
    const votes = voteContainers.map((vc) => {
        const voter = vc.children[1].querySelector('b').innerText;
        const votes = Number(vc.children[2]?.innerText || 0);
        return {voter, votes};
    });

    return { song, submitter, votes };
});

console.log(JSON.stringify({
    title: roundTitle,
    results,
}, null, 2));
