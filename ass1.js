function updateBio() {

    let name = prompt("Enter your name:");
    let profession = prompt("Enter your profession:");
    let photoUrl = prompt("Enter the URL of your profile picture:");


    if (!name || !profession || !photoUrl) {
        alert("Please fill in all fields.");
        return;
    }

    
    alert(`Name: ${name}\nProfession: ${profession}\nPhoto URL: ${photoUrl}`);

  
    console.log(`Name: ${name}`);
    console.log(`Profession: ${profession}`);
    console.log(`Photo URL: ${photoUrl}`);

   
    document.getElementById("name").textContent = `Name: ${name}`;
    document.getElementById("profession").textContent = `Profession: ${profession}`;
    document.getElementById("profile-pic").src = photoUrl;
    document.getElementById("profile-pic").style.display = "block";
}


updateBio();