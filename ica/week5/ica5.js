const expandBtn = document.querySelector('.expand-btn');
const details = document.querySelector('.details-hidden');

expandBtn.addEventListener('click', () => 
    {
    if (details.style.display === 'none' || details.style.display === '') 
        {details.style.display = 'block';
        expandBtn.textContent = '-'
        }
    else 
        {details.style.display = 'none';
        expandBtn.textContent = '+'
        }
    }
);