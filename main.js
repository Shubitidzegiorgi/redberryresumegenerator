// Pop up 
const popWindow = document.querySelector(".pop-window");
const popWindowCloseBtn = document.querySelector(".pop-window-btn ");
popWindowCloseBtn.addEventListener("click", function () {
  popWindow.style.display = "none";
});
addNewPositionEducation();
const eduCreateFormBtn = document.querySelector(".addedu-btn");
eduCreateFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNewPositionEducation();
});

addNewPositionExperience();
const experCreateFormBtn = document.querySelector(".addexp-btn");
experCreateFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNewPositionExperience();
});

// Start page consts--------------------
const homeBtn = document.querySelector(".homepage-btn");
const homePage = document.querySelector(".homepage");

// Personal Page consts---------
const backHomePageBtn = document.querySelector(".personal-backbtn");
const appSection = document.querySelector(".working-section");
const personalInfoPage = document.querySelector(".personalinfo-page");
const picUploadBtn = document.querySelector(".upload-btn");
const picUploadInput = document.querySelector(".file-input");
const personalNextBtn = document.querySelector(".personal-nextbtn");
const personalForm = document.querySelector(".personalpage-form");
const personalAbout = document.querySelector(".input-about");
const nameInput = document.querySelector(".personalpage-name-input");
const lastNameInput = document.querySelector(".personalpage-lastname-input");
const emailInput = document.querySelector(".input-email");
const mobileInput = document.querySelector(".input-mobile");

// Resume generator page consts
const resumePage = document.querySelector(".resume-page");
const resumePersonalBlock = document.querySelector(".resume-personal");
const fullNameResume = document.querySelector(".resume-fullname");
const resumePic = document.querySelector(".resume-image");
const resumeEmail = document.querySelector(".resume-email");
const resumeMobile = document.querySelector(".resume-number");
const emailSvg = document.querySelector(".email-svg");
const mobileSvg = document.querySelector(".mobilesvg");
const resumeAboutTitle = document.querySelector(".resume-about");
const resumeAboutText = document.querySelector(".resume-about-text");
const resumeExperTitle = document.querySelector(
  ".resume-experience-title"
);
const resumeGrayLine = document.querySelector(".resume-grayline");
const resumeGrayLine2 = document.querySelector(".resume-grayline2");
// Experience 
const experForm = document.querySelector(".experience-form");
const employerInput = document.querySelector(".input-employer");
const experBox = document.querySelector(".resume-experience-box");
const experBackBtn = document.querySelector(".experience-back");

// Education -------
const eduForm = document.querySelector(".education-form");
const eduBackBtn = document.querySelector(".education-back-btn");

// Page Titles and counts----
const pageTitle = document.querySelector(".apersonalpage-title");
const pageNumber = document.querySelector(".personalpage-num");

// Personal Page Validation 
const nameInputValidMarkGreen = document.querySelector(
  ".validate-markgreen1"
);
const nameInputValidMarkRed = document.querySelector(
  ".validate-markred1"
);
const lastNameInputValidMarkGreen = document.querySelector(
  ".validate-markgreen2"
);
const lastNameInputValidMarkRed = document.querySelector(
  ".validate-markred2"
);
const uploadInputValidMarkGreen = document.querySelector(
  ".validate-mark-green-upload"
);
const uploadInputValidMarkRed = document.querySelector(
  ".validate-mark-red-upload"
);
const emailInputValidMarkGreen = document.querySelector(
  ".validate-mark-green-maxwidth1"
);
const emailInputValidMarkRed = document.querySelector(
  ".validate-mark-red-maxwidth1"
);
const mobileInputValidMarkGreen = document.querySelector(
  ".validate-mark-green-maxwidth2"
);
const mobileInputValidMarkRed = document.querySelector(
  ".validate-mark-red-maxwidth2"
);

// PersonalInfo Validation
function checkDateVal(input) {
  if (input.value === "") {
    return false;
  } else return true;
}
function minTwoSymbolVal(input) {
  if (input.value.length >= 2) {
    return true;
  } else {
    return false;
  }
}
function validateGeorgian(input) {
  let regExp = /^[ა-ჰ]+$/;
  return regExp.test(input);
}
function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegex.test(email);
}
function validateGeorgianMobile(mobile) {
  let mobileRegex = /^(\+995)\d{9}$/;
  return mobileRegex.test(mobile);
}
function validateUploadPicture(img) {
  if (img.src === "") {
    return false;
  } else return true;
}
function fullName(string1, string2) {
  fullNameResume.innerHTML = string1 + " " + string2;
}

nameInput.value = sessionStorage.getItem("name");
if (validateGeorgian(nameInput.value) && nameInput.value.length >= 2) {
  nameInput.classList.add("app__input--green");
  nameInput.classList.remove("app__input--red");
  nameInputValidMarkGreen.style.opacity = "100";
  nameInputValidMarkRed.style.opacity = "0";
} else {
  nameInput.classList.remove("app__input--green");
  nameInput.classList.add("app__input--red");
  nameInputValidMarkGreen.style.opacity = "0";
  nameInputValidMarkRed.style.opacity = "100";
}

nameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("name", nameInput.value);
  fullName(nameInput.value, lastNameInput.value);
  if (validateGeorgian(nameInput.value) && nameInput.value.length >= 2) {
    nameInput.classList.add("app__input--green");
    nameInput.classList.remove("app__input--red");
    nameInputValidMarkGreen.style.opacity = "100";
    nameInputValidMarkRed.style.opacity = "0";
  } else if (!validateGeorgian(nameInput.value) && nameInput.value.length > 0) {
    nameInput.classList.add("app__input--red");
    nameInput.classList.remove("app__input--green");
    nameInputValidMarkGreen.style.opacity = "0";
    nameInputValidMarkRed.style.opacity = "100";
  } else if (nameInput.value.trim() === "") {
    nameInput.classList.remove("app__input--green");
    nameInput.classList.remove("app__input--red");
    nameInputValidMarkGreen.style.opacity = "0";
    nameInputValidMarkRed.style.opacity = "0";
  }
});
lastNameInput.value = sessionStorage.getItem("surname");
if (validateGeorgian(lastNameInput.value) && lastNameInput.value.length >= 2) {
  lastNameInput.classList.add("app__input--green");
  lastNameInput.classList.remove("app__input--red");
  lastNameInput.classList.add("app__input--green");
  lastNameInput.classList.remove("app__input--red");
  lastNameInputValidMarkGreen.style.opacity = "100";
  lastNameInputValidMarkRed.style.opacity = "0";
} else {
  lastNameInput.classList.remove("app__input--green");
  lastNameInput.classList.add("app__input--red");
  lastNameInputValidMarkGreen.style.opacity = "0";
  lastNameInputValidMarkRed.style.opacity = "100";
}
lastNameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("surname", lastNameInput.value);
  fullName(nameInput.value, lastNameInput.value);
  if (
    validateGeorgian(lastNameInput.value) &&
    lastNameInput.value.length >= 2
  ) {
    lastNameInput.classList.add("app__input--green");
    lastNameInput.classList.remove("app__input--red");
    lastNameInputValidMarkGreen.style.opacity = "100";
    lastNameInputValidMarkRed.style.opacity = "0";
  } else if (
    !validateGeorgian(lastNameInput.value) &&
    lastNameInput.value.length > 0
  ) {
    lastNameInput.classList.add("app__input--red");
    lastNameInput.classList.remove("app__input--green");
    lastNameInputValidMarkGreen.style.opacity = "0";
    lastNameInputValidMarkRed.style.opacity = "100";
  } else if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.remove("app__input--green");
    lastNameInput.classList.remove("app__input--red");
    lastNameInputValidMarkGreen.style.opacity = "0";
    lastNameInputValidMarkRed.style.opacity = "0";
  }
});

fullName(nameInput.value, lastNameInput.value);

emailInput.value = sessionStorage.getItem("email");
if (emailInput.value.length > 0) {
  emailSvg.style.display = "block";
}
resumeEmail.textContent = sessionStorage.getItem("email");
if (isValidEmail(emailInput.value)) {
  emailInput.classList.add("app__input--green");
  emailInput.classList.remove("app__input--red");
  emailInputValidMarkGreen.style.opacity = "100";
  emailInputValidMarkRed.style.opacity = "0";
} else {
  emailInput.classList.remove("app__input--green");
  emailInput.classList.add("app__input--red");
  emailInputValidMarkGreen.style.opacity = "0";
  emailInputValidMarkRed.style.opacity = "100";
}
emailInput.addEventListener("keyup", function () {
  sessionStorage.setItem("email", emailInput.value);
  resumeEmail.textContent = sessionStorage.getItem("email");
  emailSvg.style.display = "block";
  if (emailInput.value.trim() === "") {
    emailSvg.style.display = "none";
    emailInput.classList.remove("app__input--green");
    emailInput.classList.remove("app__input--red");
    emailInputValidMarkGreen.style.opacity = "0";
    emailInputValidMarkRed.style.opacity = "0";
  } else if (isValidEmail(emailInput.value)) {
    emailInput.classList.add("app__input--green");
    emailInput.classList.remove("app__input--red");
    emailInputValidMarkGreen.style.opacity = "100";
    emailInputValidMarkRed.style.opacity = "0";
  } else {
    emailInput.classList.remove("app__input--green");
    emailInput.classList.add("app__input--red");
    emailInputValidMarkGreen.style.opacity = "0";
    emailInputValidMarkRed.style.opacity = "100";
  }
});
mobileInput.value = sessionStorage.getItem("mobile");
if (mobileInput.value.length > 0) {
  mobileSvg.style.display = "block";
}
resumeMobile.textContent = sessionStorage.getItem("mobile");
if (validateGeorgianMobile(mobileInput.value)) {
  mobileInput.classList.add("app__input--green");
  mobileInput.classList.remove("app__input--red");
  mobileInputValidMarkGreen.style.opacity = "100";
  mobileInputValidMarkRed.style.opacity = "0";
} else {
  mobileInput.classList.remove("app__input--green");
  mobileInput.classList.add("app__input--red");
  mobileInputValidMarkGreen.style.opacity = "0";
  mobileInputValidMarkRed.style.opacity = "100";
}
mobileInput.addEventListener("keyup", function () {
  sessionStorage.setItem("mobile", mobileInput.value);
  resumeMobile.textContent = sessionStorage.getItem("mobile");
  mobileSvg.style.display = "block";
  if (validateGeorgianMobile(mobileInput.value)) {
    mobileInput.classList.add("app__input--green");
    mobileInput.classList.remove("app__input--red");
    mobileInputValidMarkGreen.style.opacity = "100";
    mobileInputValidMarkRed.style.opacity = "0";
  } else if (
    !validateGeorgianMobile(mobileInput.value) &&
    mobileInput.value.length > 0
  ) {
    mobileInput.classList.remove("app__input--green");
    mobileInput.classList.add("app__input--red");
    mobileInputValidMarkGreen.style.opacity = "0";
    mobileInputValidMarkRed.style.opacity = "100";
  } else if (mobileInput.value.trim() === "") {
    mobileSvg.style.display = "none";
    mobileInput.classList.remove("app__input--green");
    mobileInput.classList.remove("app__input--red");
    mobileInputValidMarkGreen.style.opacity = "0";
    mobileInputValidMarkRed.style.opacity = "0";
  }
});
// ------------------------Image
picUploadInput.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    resumePic.src = e.target.result;
    resumePic.style.display = "block";
    sessionStorage.setItem("profilePic", e.target.result);
  };
  reader.readAsDataURL(file);
  uploadInputValidMarkGreen.style.opacity = "100";
  uploadInputValidMarkRed.style.opacity = "0";
});

window.onload = function () {
  if (sessionStorage.getItem("profilePic")) {
    resumePic.src = sessionStorage.getItem("profilePic");
    resumePic.style.display = "block";
  }
};

picUploadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picUploadInput.click();
});

// ---------------------------------
personalAbout.value = sessionStorage.getItem("About");
resumeAboutText.textContent = personalAbout.value;
if (personalAbout.value.length > 0) {
  resumeAboutTitle.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
}
personalAbout.addEventListener("keyup", function () {
  sessionStorage.setItem("About", personalAbout.value);
  resumeAboutText.textContent = personalAbout.value;
  if (personalAbout.value.trim() === "") {
    resumeAboutTitle.textContent = "";
  } else {
    resumeAboutTitle.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
  }
});

personalNextBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (nameInput.value.length === 0) {
    nameInput.classList.add("app__input--red");
  }
  if (lastNameInput.value.length === 0) {
    lastNameInput.classList.add("app__input--red");
  }
  if (emailInput.value.length === 0) {
    emailInput.classList.add("app__input--red");
  }
  if (mobileInput.value.length === 0) {
    mobileInput.classList.add("app__input--red");
  }
  if (picUploadInput.files[0] === undefined) {
    uploadInputValidMarkRed.style.opacity = "100";
    uploadInputValidMarkGreen.style.opacity = "0";
    alert(`Please upload profile picture`);
  }
  if (
    validateGeorgian(nameInput.value, lastNameInput.value) &&
    validateUploadPicture(resumePic) &&
    isValidEmail(emailInput.value) &&
    validateGeorgianMobile(mobileInput.value) &&
    picUploadInput.files[0]
  ) {
    resumeGrayLine.style.display = "block";
    resumeExperTitle.style.display = "block";
    personalForm.style.display = "none";
    pageTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
    pageNumber.textContent = "2/3";
    experForm.style.display = "block";
  }
});

homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
  personalForm.style.display = "flex";
  personalInfoPage.style.display = "block";
  resumePage.style.margin = "0";
  if (picUploadInput.files[0] === undefined) {
    uploadInputValidMarkGreen.style.opacity = "0";
    uploadInputValidMarkRed.style.opacity = "100";
  }
});
backHomePageBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  personalForm.style.display = "none";
  eduForm.style.display = "none";
  experForm.style.display = "none";
  appSection.style.display = "none";
  pageTitle.textContent = "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ";
  pageNumber.textContent = "1/3";
  sessionStorage.clear();
  location.reload();
});

// ------------------------------------------------------------------------------------

// Experience Form Func
function addNewPositionExperience() {
  const positionTemplate = document
    .getElementById("position-template")
    .children[0].cloneNode(true);
  const experienceTemplate = document
    .getElementById("exp-boxtemplate")
    .children[0].cloneNode(true);
  // Insert into form
  document
    .getElementsByClassName("experience-form")[0]
    .prepend(positionTemplate);
  // Insert into generated CV
  insertBefore(
    document.getElementsByClassName("resume-logo")[0],
    experienceTemplate
  );
  const resumeExperPosition = experienceTemplate.querySelector(
    ".resume-experience-position"
  );
  function jobInfo(input1, input2) {
    return (resumeExperPosition.textContent = `${input1}${
      input1 ? " " + "," + input2 : input2
    }`);
  }
  // Experience Page Validation 
  const positionInputValidMarkGreen = positionTemplate.querySelector(
    ".validate-mark-green-maxwidth3"
  );
  const positionInputValidMarkRed = positionTemplate.querySelector(
    ".validate-mark-red-maxwidth3"
  );
  const employerInputValidMarkGreen = positionTemplate.querySelector(
    ".validate-mark-green-maxwidth4"
  );
  const employerInputValidMarkRed = positionTemplate.querySelector(
    ".validate-mark-red-maxwidth4"
  );
  const positionInput = positionTemplate.querySelector(".app__input--position");
  positionInput.value = sessionStorage.getItem("position");
  if (minTwoSymbolVal(positionInput)) {
    positionInput.classList.add("app__input--green");
    positionInput.classList.remove("app__input--red");
    positionInputValidMarkGreen.style.opacity = "100";
    positionInputValidMarkRed.style.opacity = "0";
  } else {
    positionInput.classList.remove("app__input--green");
    positionInput.classList.add("app__input--red");
    positionInputValidMarkGreen.style.opacity = "0";
    positionInputValidMarkRed.style.opacity = "100";
  }
  positionInput.addEventListener("keyup", function () {
    sessionStorage.setItem("position", positionInput.value);
    jobInfo(positionInput.value, employerInput.value);
    if (minTwoSymbolVal(positionInput)) {
      positionInput.classList.add("app__input--green");
      positionInput.classList.remove("app__input--red");
      positionInputValidMarkGreen.style.opacity = "100";
      positionInputValidMarkRed.style.opacity = "0";
    } else if (
      !minTwoSymbolVal(positionInput) &&
      positionInput.value.length > 0 &&
      positionInput.value.length < 2
    ) {
      positionInput.classList.remove("app__input--green");
      positionInput.classList.add("app__input--red");
      positionInputValidMarkGreen.style.opacity = "0";
      positionInputValidMarkRed.style.opacity = "100";
    } else {
      positionInput.classList.remove("app__input--green");
      positionInput.classList.remove("app__input--red");
      positionInputValidMarkGreen.style.opacity = "0";
      positionInputValidMarkRed.style.opacity = "0";
    }
  });

  const employerInput = positionTemplate.querySelector(".input-employer");
  employerInput.value = sessionStorage.getItem("employer");
  if (minTwoSymbolVal(employerInput)) {
    employerInput.classList.add("app__input--green");
    employerInput.classList.remove("app__input--red");
    employerInputValidMarkGreen.style.opacity = "100";
    employerInputValidMarkRed.style.opacity = "0";
  } else {
    employerInput.classList.remove("app__input--green");
    employerInput.classList.add("app__input--red");
    employerInputValidMarkGreen.style.opacity = "0";
    employerInputValidMarkRed.style.opacity = "100";
  }
  employerInput.addEventListener("keyup", function () {
    jobInfo(positionInput.value, employerInput.value);
    sessionStorage.setItem("employer", employerInput.value);
    if (minTwoSymbolVal(employerInput)) {
      employerInput.classList.add("app__input--green");
      employerInput.classList.remove("app__input--red");
      employerInputValidMarkGreen.style.opacity = "100";
      employerInputValidMarkRed.style.opacity = "0";
    } else if (
      !minTwoSymbolVal(employerInput) &&
      employerInput.value.length > 0 &&
      employerInput.value.length < 2
    ) {
      employerInput.classList.remove("app__input--green");
      employerInput.classList.add("app__input--red");
      employerInputValidMarkGreen.style.opacity = "100";
      employerInputValidMarkRed.style.opacity = "0";
    } else {
      employerInput.classList.remove("app__input--green");
      employerInput.classList.remove("app__input--red");
      employerInputValidMarkGreen.style.opacity = "0";
      employerInputValidMarkRed.style.opacity = "0";
    }
  });
  jobInfo(positionInput.value, employerInput.value);
  const experDate1 = positionTemplate.querySelector(".date-input1");
  const experDate2 = positionTemplate.querySelector(".date-input2");
  const resumeExperDate = experienceTemplate.querySelector(
    ".resume-experience-date"
  );
  function fullDate(string1, string2) {
    return (resumeExperDate.textContent = `${string1}${
      string1 ? "-" + string2 : string2
    }`);
  }
  const resumeExperTitle = document.querySelector(
    ".resume-experience-title"
  );
  const experForm = document.querySelector(".experience-form");
  const inputs = experForm.querySelectorAll("input");
  const textArea = experForm.querySelectorAll("textarea");
  inputs.forEach((element) => {
    if (element.value) {
      resumeExperTitle.style.display = "block";
    }
  });
  textArea.forEach((element) => {
    if (element.value) {
      resumeExperTitle.style.display = "block";
    }
  });

  experDate1.value = sessionStorage.getItem("experDate1");
  experDate2.value = sessionStorage.getItem("experDate2");
  if (checkDateVal(experDate1)) {
    experDate1.classList.add("app__input--green");
    experDate1.classList.remove("app__input--red");
  } else {
    experDate1.classList.remove("app__input--green");
    experDate1.classList.add("app__input--red");
  }
  fullDate(experDate1.value, experDate2.value);
  experDate1.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    sessionStorage.setItem("experDate1", experDate1.value);
    if (checkDateVal(experDate1)) {
      experDate1.classList.add("app__input--green");
      experDate1.classList.remove("app__input--red");
    } else {
      experDate1.classList.remove("app__input--green");
      experDate1.classList.add("app__input--red");
    }
  });
  if (checkDateVal(experDate1)) {
    experDate2.classList.add("app__input--green");
    experDate2.classList.remove("app__input--red");
  } else {
    experDate2.classList.remove("app__input--green");
    experDate2.classList.add("app__input--red");
  }
  experDate2.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    sessionStorage.setItem("experDate2", experDate2.value);
    if (checkDateVal(experDate1)) {
      experDate2.classList.add("app__input--green");
      experDate2.classList.remove("app__input--red");
    } else {
      experDate2.classList.remove("app__input--green");
      experDate2.classList.add("app__input--red");
    }
  });
  const experDescription = positionTemplate.querySelector(
    ".input-description"
  );
  experDescription.value = sessionStorage.getItem("experDescription");
  const resumeExperDescription = experienceTemplate.querySelector(
    ".resume-experience-description"
  );
  resumeExperDescription.textContent = experDescription.value;
  if (checkDateVal(experDescription)) {
    experDescription.classList.add("app__input--green");
    experDescription.classList.remove("app__input--red");
  } else {
    experDescription.classList.remove("app__input--green");
    experDescription.classList.add("app__input--red");
  }
  experDescription.addEventListener("keyup", function () {
    sessionStorage.setItem("experDescription", experDescription.value);
    resumeExperDescription.textContent = experDescription.value;

    if (checkDateVal(experDescription)) {
      experDescription.classList.add("app__input--green");
      experDescription.classList.remove("app__input--red");
    } else {
      experDescription.classList.remove("app__input--green");
      experDescription.classList.add("app__input--red");
    }
  });
  const experNextBtn = document.querySelector(".experience-next");
  experNextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (positionInput.value.length === 0) {
      positionInput.classList.add("app__input--red");
    }
    if (employerInput.value.length === 0) {
      employerInput.classList.add("app__input--red");
    }
    if (experDescription.value.length === 0) {
      experDescription.classList.add("app__input--red");
    }
    if (experDate1.value.length === 0) {
      experDate1.classList.add("app__input--red");
    }
    if (experDate2.value.length === 0) {
      experDate2.classList.add("app__input--red");
    }
    if (
      minTwoSymbolVal(positionInput) &&
      minTwoSymbolVal(employerInput) &&
      checkDateVal(experDescription) &&
      checkDateVal(experDate1) &&
      checkDateVal(experDate2)
    ) {
      resumeEduTitle.style.display = "block";
      experForm.style.display = "none";
      pageTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
      pageNumber.textContent = "3/3";
      eduForm.style.display = "flex";
      resumeGrayLine2.style.display = "block";
    }
  });
}

experBackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const experForm = document.querySelector(".experience-form");
  const resumeExperTitle = document.querySelector(
    ".resume-experience-title"
  );
  experForm.style.display = "none";
  personalForm.style.display = "flex";
  pageTitle.textContent = "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ";
  pageNumber.textContent = "1/3";
  resumeExperTitle.style.display = "none";

  const inputs = experForm.querySelectorAll("input");
  const textArea = experForm.querySelectorAll("textarea");
  inputs.forEach((element) => {
    if (element.value) {
      resumeExperTitle.style.display = "block";
    }
  });
  textArea.forEach((element) => {
    if (element.value) {
      resumeExperTitle.style.display = "block";
    }
  });
});
// Education Form Func
function addNewPositionEducation() {
  const positionTemplateSecond = document
    .getElementById("position-template2")
    .children[0].cloneNode(true);
  const educationTemplate = document
    .getElementById("edubox-template")
    .children[0].cloneNode(true);
  // Insert into form
  document
    .getElementsByClassName("education-form")[0]
    .prepend(positionTemplateSecond);
  // Insert into generated CV
  insertAfter(
    document.getElementsByClassName("resume-education-title")[0],
    educationTemplate
  );
  const eduSchoolInput = positionTemplateSecond.querySelector(
    ".education-school"
  );
  const resumeEduSchool = educationTemplate.querySelector(
    ".app-resume-education-school"
  );
  function fullName(input1, input2) {
    return (resumeEduSchool.textContent = `${input1}  ${
      input1 ? " " + "," + input2 : input2
    }`);
  }

  const schoolInputValidMarkGreen = positionTemplateSecond.querySelector(
    ".validate-mark-green-maxwidth5"
  );
  const schoolInputValidMarkRed = positionTemplateSecond.querySelector(
    ".validate-mark-red-maxwidth5"
  );
  eduSchoolInput.value = sessionStorage.getItem("eduSchool");
  if (minTwoSymbolVal(eduSchoolInput)) {
    eduSchoolInput.classList.add("app__input--green");
    eduSchoolInput.classList.remove("app__input--red");
    schoolInputValidMarkGreen.style.opacity = "100";
    schoolInputValidMarkRed.style.opacity = "0";
  } else {
    eduSchoolInput.classList.remove("app__input--green");
    eduSchoolInput.classList.add("app__input--red");
    schoolInputValidMarkGreen.style.opacity = "0";
    schoolInputValidMarkRed.style.opacity = "100";
  }
  eduSchoolInput.addEventListener("keyup", function () {
    fullName(eduSchoolInput.value, eduDegreeSelect.value);
    sessionStorage.setItem("eduSchool", eduSchoolInput.value);
    if (minTwoSymbolVal(eduSchoolInput)) {
      eduSchoolInput.classList.add("app__input--green");
      eduSchoolInput.classList.remove("app__input--red");
      schoolInputValidMarkGreen.style.opacity = "100";
      schoolInputValidMarkRed.style.opacity = "0";
    } else if (
      !minTwoSymbolVal(eduSchoolInput) &&
      eduSchoolInput.value.length > 0 &&
      eduSchoolInput.value.length < 2
    ) {
      eduSchoolInput.classList.remove("app__input--green");
      eduSchoolInput.classList.add("app__input--red");
      schoolInputValidMarkGreen.style.opacity = "0";
      schoolInputValidMarkRed.style.opacity = "100";
    } else {
      eduSchoolInput.classList.remove("app__input--green");
      eduSchoolInput.classList.remove("app__input--red");
      schoolInputValidMarkGreen.style.opacity = "0";
      schoolInputValidMarkRed.style.opacity = "0";
    }
  });
  const eduDegreeSelect = positionTemplateSecond.querySelector(
    ".education-select"
  );
  // Axios API Get
  axios.get("https://resume.redberryinternship.ge/api/degrees").then((resp) => {
    const degreeArr = resp.data;
    degreeArr.forEach((element) => {
      let degreeOption = document.createElement("option");
      eduDegreeSelect.appendChild(degreeOption);
      degreeOption.value = element.id;
      degreeOption.textContent = element.title;
    });

    if (sessionStorage.getItem("eduDegree")) {
      eduDegreeSelect.value = sessionStorage.getItem("eduDegree");
      eduDegreeSelect.dispatchEvent(new Event("change"));
    }
  });

  eduDegreeSelect.addEventListener("change", function () {
    let selectedOption =
      eduDegreeSelect.options[eduDegreeSelect.selectedIndex].textContent;
    fullName(eduSchoolInput.value, selectedOption);
    sessionStorage.setItem("eduDegree", eduDegreeSelect.value);
    if (checkDateVal(eduDegreeSelect)) {
      eduDegreeSelect.classList.add("app__input--green");
      eduDegreeSelect.classList.remove("app__input--red");
    } else {
      eduDegreeSelect.classList.remove("app__input--green");
      eduDegreeSelect.classList.add("app__input--red");
    }
  });

  // Retrieve the saved value after page refresh

  const eduDateInput = positionTemplateSecond.querySelector(
    ".education-date"
  );
  eduDateInput.value = sessionStorage.getItem("eduDate");
  const resumeEduDate = educationTemplate.querySelector(
    ".app-resume-education-date"
  );
  const resumeEduTitle = document.querySelector(
    ".resume-education-title"
  );
  const eduForm = document.querySelector(".education-form");
  const inputs = eduForm.querySelectorAll("input");
  const textArea = eduForm.querySelectorAll("textarea");
  inputs.forEach((element) => {
    if (element.value) {
      resumeEduTitle.style.display = "block";
    }
  });
  textArea.forEach((element) => {
    if (element.value) {
      resumeEduTitle.style.display = "block";
    }
  });
  resumeEduDate.textContent = eduDateInput.value;
  if (checkDateVal(eduDateInput)) {
    eduDateInput.classList.add("app__input--green");
    eduDateInput.classList.remove("app__input--red");
  } else {
    eduDateInput.classList.remove("app__input--green");
    eduDateInput.classList.add("app__input--red");
  }

  eduDateInput.addEventListener("change", function () {
    sessionStorage.setItem("eduDate", eduDateInput.value);
    if (checkDateVal(eduDateInput)) {
      eduDateInput.classList.add("app__input--green");
      eduDateInput.classList.remove("app__input--red");
    } else {
      eduDateInput.classList.remove("app__input--green");
      eduDateInput.classList.add("app__input--red");
    }
  });
  const eduDescriptionInput = positionTemplateSecond.querySelector(
    ".input-edu-description"
  );
  eduDescriptionInput.value = sessionStorage.getItem("eduDesc");
  if (checkDateVal(eduDescriptionInput)) {
    eduDescriptionInput.classList.add("app__input--green");
    eduDescriptionInput.classList.remove("app__input--red");
  } else {
    eduDescriptionInput.classList.remove("app__input--green");
    eduDescriptionInput.classList.add("app__input--red");
  }
  const resumeEduDescription = educationTemplate.querySelector(
    ".app-resume-education-description"
  );
  resumeEduDescription.textContent = eduDescriptionInput.value;
  eduDescriptionInput.addEventListener("keyup", function () {
    sessionStorage.setItem("eduDesc", eduDescriptionInput.value);
    resumeEduDescription.textContent = eduDescriptionInput.value;
    if (checkDateVal(eduDescriptionInput)) {
      eduDescriptionInput.classList.add("app__input--green");
      eduDescriptionInput.classList.remove("app__input--red");
    } else {
      eduDescriptionInput.classList.remove("app__input--green");
      eduDescriptionInput.classList.add("app__input--red");
    }
  });
  const eduNextBtn = document.querySelector(".education-finish-btn");
  eduNextBtn.addEventListener("click", function (e) {
    e.preventDefault();

    if (
      minTwoSymbolVal(eduSchoolInput) &&
      checkDateVal(eduDegreeSelect) &&
      checkDateVal(eduDateInput) &&
      checkDateVal(eduDescriptionInput)
    ) {
      submit();
    }
  });
}
const resumeEduTitle = document.querySelector(".resume-education-title");
eduBackBtn.addEventListener("click", function (e) {
  const eduForm = document.querySelector(".education-form");
  e.preventDefault();
  resumeEduTitle.style.display = "none";
  experForm.style.display = "flex";
  eduForm.style.display = "none";
  pageNumber.textContent = "2/3";
  pageTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";

  const inputs = eduForm.querySelectorAll("input");
  const textArea = eduForm.querySelectorAll("textarea");
  inputs.forEach((element) => {
    if (element.value) {
      resumeEduTitle.style.display = "block";
    }
  });
  textArea.forEach((element) => {
    if (element.value) {
      resumeEduTitle.style.display = "block";
    }
  });
});
// insert Function
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function insertBefore(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function submit() {
  const formModel = getFormModel();
  const formData = convertModelToFormData(formModel);

  axios
    .post("https://resume.redberryinternship.ge/api/cvs", formData)
    .then((response) => {
      console.log(response.data);
      if (response.data.error) {
        alert("Please fill all inputs");
        return;
      }

      popWindow.style.display = "block";
      personalInfoPage.style.display = "none";
      resumePage.style.margin = "0 auto";
      resumePage.style.marginTop = "54px";
      resumePage.style.border = "1px solid #E4E4E4";
      resumePage.style.boxShadow = "0px 4px 28px rgba(0, 0, 0, 0.25)";
      resumePage.style.borderRadius = "3px";
      appSection.style.paddingBottom = "129px";
      sessionStorage.clear();
    })
    .catch((error) => {
      console.error(error);
      alert("Please fill all inputs ,before sending!");
    });
}

function getFormModel() {
  const allExperiences = Array.from(
    document.querySelectorAll(".personalinfo-page .positionwrap")
  ).map((d) => {
    return {
      position: d.querySelector(".input-position").value,
      employer: d.querySelector(".input-employer").value,
      start_date: d.querySelector(".date-input1").value,
      due_date: d.querySelector(".date-input2").value,
      description: d.querySelector(".input-description").value,
    };
  });
  const allEducations = Array.from(
    document.querySelectorAll(".personalinfo-page .educationwrap")
  ).map((d) => {
    const degreeSelect = d.querySelector(".education-select");

    return {
      institute: d.querySelector(".education-school").value,
      degree_id: degreeSelect.value,
      degree: degreeSelect.options[degreeSelect.selectedIndex].text,
      due_date: d.querySelector(".education-date").value,
      description: d.querySelector(".input-edu-description").value,
    };
  });
  //
  return {
    name: nameInput.value,
    surname: lastNameInput.value,
    email: emailInput.value,
    phone_number: mobileInput.value,
    experiences: allExperiences,
    educations: allEducations,
    image: picUploadInput.files[0],
    about_me: personalAbout.value,
  };
}

function convertModelToFormData(data = {}, form = null, namespace = "") {
  const formData = form || new FormData();

  for (const propertyName in data) {
    if (!data.hasOwnProperty(propertyName) || !data[propertyName]) continue;
    let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
    if (data[propertyName] instanceof Date)
      formData.append(formKey, data[propertyName].toISOString());
    else if (data[propertyName] instanceof File) {
      formKey = formKey.replace("[" + propertyName + "]", "." + propertyName);
      formData.append(formKey, data[propertyName]);
    } else if (data[propertyName] instanceof Array) {
      data[propertyName].forEach((element, index) => {
        const tempFormKey = `${formKey}[${index}]`;
        if (typeof element === "object")
          convertModelToFormData(element, formData, tempFormKey);
        else formData.append(tempFormKey, element.toString());
      });
    } else if (
      typeof data[propertyName] === "object" &&
      !(data[propertyName] instanceof File)
    ) {
      convertModelToFormData(data[propertyName], formData, formKey);
    } else {
      formData.append(formKey, data[propertyName].toString());
    }
  }

  return formData;
}
