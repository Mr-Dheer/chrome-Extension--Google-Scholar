document.getElementById('sort-asc').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (order) => {
                const publications = [...document.querySelectorAll('.gsc_a_tr')];

                publications.sort((a, b) => {
                    const yearA = parseInt(a.querySelector('.gsc_a_y').innerText) || 0;
                    const yearB = parseInt(b.querySelector('.gsc_a_y').innerText) || 0;
                    return order === 'asc' ? yearA - yearB : yearB - yearA;
                });

                const parent = document.querySelector('.gsc_a_t');
                publications.forEach(pub => parent.appendChild(pub));
            },
            args: ['asc']
        });
    });
});

document.getElementById('sort-desc').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (order) => {
                const publications = [...document.querySelectorAll('.gsc_a_tr')];

                publications.sort((a, b) => {
                    const yearA = parseInt(a.querySelector('.gsc_a_y').innerText) || 0;
                    const yearB = parseInt(b.querySelector('.gsc_a_y').innerText) || 0;
                    return order === 'asc' ? yearA - yearB : yearB - yearA;
                });

                const parent = document.querySelector('.gsc_a_t');
                publications.forEach(pub => parent.appendChild(pub));
            },
            args: ['desc']
        });
    });
});
