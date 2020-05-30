/* List the Team*/
let teamMembers = [{

        name: "Roy Nelson",
        post: "Director",
        email: "roy@index.com",
        image: src = "images/img/Cf_dummy_profile_image-1",
        quote: "In 2008, Roy took what he learned working closely with franchise dealers, auto groups, and independent pre-owned dealers and established – Company of Cars. When Roy isn’t writing about himself here in the third person or focused on his business, he is an avid athlete, CrossFit enthusiast and Martial Arts practitioner.",
    },
    {
        name: "Janet Watson",
        post: "Marketing",
        email: "bill@index.com",
        image: "Cf_dummy_profile_image-2",
        quote: "Janet is an integral part of our accounting team. Before joining It, she worked as a PA to the managing directors and as an event manager at various small and medium sized businesses.",
    },
    {
        name: "Henry Duncan",
        post: "Accounting",
        email: "fritz@index.com",
        image: "Cf_dummy_profile_image-3",
        quote: "Henry is executive Vice Chairman of the Company. From February 2003 to January 2005 Mr. Henry, through First Western Capital, LLC, of which he is the founder, Managing Director and owner, provided consulting services to a subsidiary of whatever. ",
    },

];


for (i = 0; i < teamMembers.length; i++) {


    let teamInfo = document.createElement("tr");

    let tableDataImage = document.createElement("td");
    tableDataImage.textContent = `${teamMembers[i].image}`;
    teamInfo.appendChild(tableDataImage);

    let tableDataName = document.createElement("td");
    tableDataName.textContent = `${teamMembers[i].name}`;
    teamInfo.appendChild(tableDataName);

    let tableDataPost = document.createElement("td");
    tableDataPost.textContent = `${teamMembers[i].post}`;
    teamInfo.appendChild(tableDataPost);

    let tableDataEmail = document.createElement("td");
    tableDataEmail.textContent = `${teamMembers[i].email}`;
    teamInfo.appendChild(tableDataEmail);

    /*let tableDataImage = document.createElement("img");
    tableDataImage.textContent = `${teamMembers[i].image}`;
    teamInfo.appendChild(tableDataImage);*/

    teamInfo.setAttribute("onclick", `showQuote('${teamMembers[i].quote}')`);


    document.getElementById("table-content").appendChild(teamInfo);
}

function showQuote(quote) {

    document.getElementById("dsp-quote").textContent = quote;
}

/* to be continued */
/*immage issues*/