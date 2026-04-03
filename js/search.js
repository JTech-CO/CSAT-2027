// Search Filter Logic
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const noResultDiv = document.getElementById('noResult');
    const sections = document.querySelectorAll('.subject-section');

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase().trim();
            let totalVisibleRows = 0;

            sections.forEach(section => {
                const rows = section.querySelectorAll('.item-row');
                let sectionHasMatch = false;

                rows.forEach(row => {
                    const title = row.querySelector('.book-title').textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        row.style.display = ''; // Show match
                        sectionHasMatch = true;
                        totalVisibleRows++;
                    } else {
                        row.style.display = 'none'; // Hide mismatch
                    }
                });

                // Hide section if no matches
                section.style.display = sectionHasMatch ? '' : 'none';
            });

            // Show "No Result" if 0 matches
            if (noResultDiv) {
                noResultDiv.style.display = totalVisibleRows === 0 ? 'block' : 'none';
            }
        });
    }
});
