document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');

    if (selectedCandidate) {
        fetch('http://localhost:3000/submit_vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ candidate: selectedCandidate.value })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').textContent = data.message;
            loadVoteCounts();
        })
        .catch(error => {
            document.getElementById('message').textContent = 'An error occurred. Please try again.';
            document.getElementById('message').style.color = 'red';
        });
    } else {
        document.getElementById('message').textContent = 'Please select a candidate before voting.';
        document.getElementById('message').style.color = 'red';
    }
});

function loadVoteCounts() {
    fetch('http://localhost:3000/vote_counts')
        .then(response => response.json())
        .then(data => {
            const voteCounts = document.getElementById('voteCounts');
            voteCounts.innerHTML = '';
            data.forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item._id}: ${item.count}`;
                voteCounts.appendChild(li);
            });
        })
        .catch(error => {
            console.error('Error fetching vote counts:', error);
        });
}
