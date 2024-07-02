function checkAnswers() { 
    const answers = { 
        q1: 'biniou', 
        q2: 'crêpe', 
        q3: 'fête de nuit' 
    }; 
    const userAnswers = { 
        q1: document.getElementById('q1').value.trim().toLowerCase(),
         q2: document.getElementById('q2').value.trim().toLowerCase(),
          q3: document.getElementById('q3').value.trim().toLowerCase() 
        }; 
        let score = 0; 
        let feedback = ''; 
        for (const [question, correctAnswer] of Object.entries(answers)) { 
            if (userAnswers[question] === correctAnswer) { 
                score++; 
                feedback += `<p>Question ${question[1]}: Correct!</p>`;
             } else { 
                feedback += `<p>Question ${question[1]}: Incorrect. La bonne réponse est "${correctAnswer}".</p>`; 
            } 
        } feedback += `<p>Vous avez obtenu ${score} sur 3.</p>`; 
    
    document.getElementById('results').innerHTML = feedback; 
    }