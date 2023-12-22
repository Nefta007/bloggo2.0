const elblogForm = document.querySelector('.new-post-form');
const elpostList = document.querySelector('.post-list');

const dashboardHandler = async (event) => {

    event.preventDefault();

    const Title = document.querySelector('#blog-title').value.trim();
    const Description = document.querySelector('#post-description').value.trim();

    if (Title && Description) {
        const response = await fetch('/api/blog', {
            method: "POST",
            body: JSON.stringify({
                Title,
                Description,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/dashboard");
        } else {
            alert(response.statusText);
        }
    }
};


const deleteHandler = async (event) => {
    event.preventDefault();

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/blog/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed  to delete blog.');
        }
    }
};

(elblogForm)
elblogForm.addEventListener('submit', dashboardHandler);

if (elpostList) {
    elpostList.addEventListener('click', deleteHandler);
}