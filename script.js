const formSteps = document.querySelectorAll('.form-step');
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');
        const nextButtons = document.querySelectorAll('.next-btn');
        let currentStep = 0;
        const totalSteps = formSteps.length;
        let filledInputs = 0;
        let totalInputs = 0;

        function updateProgressBar() {
            const activeFormStep = formSteps[currentStep].querySelectorAll('input');
            totalInputs = activeFormStep.length;
            filledInputs = Array.from(activeFormStep).reduce((count, input) => {
                if (input.value.trim() !== '') {
                    return count + 1;
                }
                return count;
            }, 0);

            const progressPercentage = (filledInputs / totalInputs) * (100 / totalSteps) + currentStep * (100 / totalSteps);
            progressBar.style.width = `${progressPercentage}%`;
            progressText.textContent = `${Math.round(progressPercentage)}%`;
        }

        function nextStep() {
            formSteps[currentStep].classList.remove('active');
            currentStep++;
            formSteps[currentStep].classList.add('active');
            updateProgressBar();
        }