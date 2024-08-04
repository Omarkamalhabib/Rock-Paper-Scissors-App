const gameContainer = document.querySelector(".container"),
            userResult = document.querySelector(".user_result img"),
            cpuResult = document.querySelector(".cpu-result img"),
            result = document.querySelector(".result"),
            optionImages = document.querySelectorAll(".option_image");

        let isGameRunning = false;

        optionImages.forEach((image, index) => {
            image.addEventListener("click", (e) => {
                if (isGameRunning) return;

                isGameRunning = true;
                result.textContent = "Loading...";
                gameContainer.classList.add("start");
                image.classList.add("active");
                
                optionImages.forEach((image2, index2) => {
                    if (index !== index2) {
                        image2.classList.remove("active");
                    }
                });

                setTimeout(() => {
                    gameContainer.classList.remove("start");

                    const imageSrc = e.target.querySelector("img").src;
                    userResult.src = imageSrc;

                    const randomNumber = Math.floor(Math.random() * 3);
                    const cpuImages = ["./img/rock.png", "./img/paper.png", "./img/scissors.png"];
                    cpuResult.src = cpuImages[randomNumber];

                    const cpuValue = ["R", "P", "S"][randomNumber];
                    const userValue = ["R", "P", "S"][index];

                    const outcomes = {
                        "RR": "Draw",
                        "RP": "Cpu",
                        "RS": "User",
                        "PP": "Draw",
                        "PR": "User",
                        "PS": "Cpu",
                        "SS": "Draw",
                        "SR": "Cpu",
                        "SP": "User"
                    };

                    const outcomeValue = outcomes[userValue + cpuValue];
                    result.textContent = userValue === cpuValue ? "Match Draw" : `${outcomeValue} Won !!`;

                    isGameRunning = false;
                }, 2500);
            });
        });

        console.log(gameContainer, userResult, cpuResult, result, optionImages);