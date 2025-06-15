function toggleSection(type) {
  const adultCheckbox = document.getElementById('adultCheckbox');
  const childCheckbox = document.getElementById('childCheckbox');
  const adultSection = document.getElementById('adultSection');
  const childSection = document.getElementById('childSection');

  if (type === 'adult') {
    if (adultCheckbox.checked) {
      childCheckbox.checked = false;
    }
  }

  if (type === 'child') {
    if (childCheckbox.checked) {
      adultCheckbox.checked = false;
    }
  }

  const isAdult = adultCheckbox.checked;
  const isChild = childCheckbox.checked;

  adultSection.classList.toggle('hidden', !isAdult);
  childSection.classList.toggle('hidden', !isChild);

  if (!isAdult) {
    document.getElementById('adultForm').classList.add('hidden');
    document.getElementById('adultCourse').value = '';
  }

  if (!isChild) {
    document.getElementById('childForm').classList.add('hidden');
    document.getElementById('childCourse').value = '';
  }
}

function showForm(type) {
  if (type === 'adult') {
    const course = document.getElementById('adultCourse').value;
    const form = document.getElementById('adultForm');
    form.classList.toggle('hidden', !course);
  }

  if (type === 'child') {
    const course = document.getElementById('childCourse').value;
    const form = document.getElementById('childForm');
    form.classList.toggle('hidden', !course);
  }
}
