document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
    const backToTop = document.getElementById("backToTop");
    const postForm = document.getElementById("postForm");
    const postsSection = document.getElementById("posts");
    const searchInput = document.getElementById("searchInput");

    // Theme Toggle
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
        themeToggle.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
    });

    // Toggle Menu
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Back to Top
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Fetch Posts
    const fetchPosts = async () => {
        const response = await fetch("/api/posts");
        const posts = await response.json();
        postsSection.innerHTML = posts.map(post => `
            <article>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </article>
        `).join("");
    };

    // Publish Post
    postForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title, content }),
        });
        postForm.reset();
        fetchPosts();
    });

    // Search Posts
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.toLowerCase();
        document.querySelectorAll("article").forEach(article => {
            article.style.display = article.textContent.toLowerCase().includes(query) ? "" : "none";
        });
    });

    fetchPosts();
});