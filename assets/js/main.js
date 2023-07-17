
function updateProfileData(profileData){

    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name    
    
    const name = document.getElementById('profile.name')
    name.innerHTML = profileData.name

    const job = document.getElementById('profile.job')
    job.innerHTML = profileData.job

    const location = document.getElementById('profile.location')
    location.innerHTML = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerHTML = profileData.phone
    phone.href = `tel:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerHTML = profileData.email
    email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData){
    const softSkills = document.getElementById('profile.skills.softSkills')

    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')

}

function updateHardSkills(profileData){
    const hardSkills = document.getElementById('profile.skills.hardSkills')

    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill =>`
    <li>
    <img src="${skill.logo}" alt="${skill.name}" title="${skill.name}">
    </li>`).join('')
}

function updateLanguages (profileData){
    const languages = document.getElementById('profile.languages')

    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')

    console.log(profileData.languages)

}





(async function() {
    const profileData = await fetchProfileData()
    updateProfileData(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
})()