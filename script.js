// Function to open topic details dynamically
function openTopic(topicId) {
    const topicsContent = {
        "information-gathering": {
            title: "Information Gathering",
            content: "Information gathering is the process of collecting data about a target system or organization. Techniques include WHOIS lookups, Google Dorking, social engineering, and DNS enumeration."
        },
        "scanning": {
            title: "Scanning Networks",
            content: "Learn to identify open ports, services, and vulnerabilities using tools like Nmap, Nessus, and Netcat. Understand the types of scans such as SYN, UDP, and aggressive scans."
        },
        "exploitation": {
            title: "Exploitation",
            content: "Exploitation involves leveraging identified vulnerabilities to gain unauthorized access. Tools like Metasploit can be used for payload generation, privilege escalation, and system exploitation."
        },
        "web-security": {
            title: "Web Application Security",
            content: "Understand OWASP Top 10 vulnerabilities, including SQL Injection, XSS, and CSRF. Learn how to secure web applications by analyzing attack surfaces and implementing proper security measures."
        },
        "wireless-hacking": {
            title: "Wireless Hacking",
            content: "Master techniques for attacking wireless networks, including WPA/WPA2 cracking, Evil Twin attacks, and deauthentication attacks using tools like Aircrack-ng and Wireshark."
        },
        "post-exploitation": {
            title: "Post Exploitation",
            content: "After exploiting a system, focus on privilege escalation, lateral movement, and persistence to maintain access and control over the target environment."
        }
    };

    const topic = topicsContent[topicId];
    if (topic) {
        alert(`${topic.title}\n\n${topic.content}`);
    } else {
        alert("Topic not found!");
    }
}

// Quiz functionality
const quizData = [
    {
        question: "What is the first step in ethical hacking?",
        options: ["Scanning", "Exploitation", "Reconnaissance", "Reporting"],
        answer: 2
    },
    {
        question: "Which tool is used for network scanning?",
        options: ["Metasploit", "Nmap", "Wireshark", "Burp Suite"],
        answer: 1
    },
    {
        question: "What does XSS stand for?",
        options: ["Cross-Site Scripting", "Cross-Server Security", "Extended Site Scanning", "None of the above"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

// Start the quiz
document.getElementById("start-quiz").addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
});

// Display quiz question
function displayQuestion() {
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestion = document.getElementById("quiz-question");
    const quizOptions = document.getElementById("quiz-options");

    quizContainer.classList.remove("hidden");

    if (currentQuestion < quizData.length) {
        const current = quizData[currentQuestion];
        quizQuestion.textContent = current.question;
        quizOptions.innerHTML = "";

        current.options.forEach((option, index) => {
            const li = document.createElement("li");
            li.textContent = option;
            li.onclick = () => checkAnswer(index);
            quizOptions.appendChild(li);
        });
    } else {
        quizQuestion.textContent = `Quiz completed! Your score is ${score}/${quizData.length}.`;
        quizOptions.innerHTML = "";
    }
}

// Check the selected answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].answer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer!");
    }
    currentQuestion++;
    displayQuestion();
}

// Dynamic Forum Button Redirect
document.getElementById("forum-button")?.addEventListener("click", () => {
    window.location.href = "forum.html";
});

// Add dynamic book resources
document.addEventListener("DOMContentLoaded", () => {
    const bookResources = [
        { title: "The Web Application Hacker's Handbook", url: "https://example.com/book1" },
        { title: "Hacking: The Art of Exploitation", url: "https://example.com/book2" },
        { title: "Penetration Testing: A Hands-On Introduction to Hacking", url: "https://example.com/book3" }
    ];

    const booksList = document.getElementById("books-resources");
    bookResources.forEach(book => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = book.url;
        a.target = "_blank";
        a.textContent = book.title;
        li.appendChild(a);
        booksList.appendChild(li);
    });
});

// Expandable FAQ Section (Optional)
function toggleFaq(faqId) {
    const faqContent = document.getElementById(faqId);
    faqContent.classList.toggle("hidden");
  }
