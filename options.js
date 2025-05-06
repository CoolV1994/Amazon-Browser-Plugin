const commandName = 'toggle-feature';

/**
 * Update the UI: set the value of the shortcut textbox.
 */
async function updateUI() {
  let commands = await browser.commands.getAll();
  for (let command of commands) {
    if (command.name === commandName) {
      document.querySelector('#aff-id').value = command.id;
    }
  }
}

/**
 * Update the shortcut based on the value in the textbox.
 */
async function updateID() {
  await browser.commands.update({
    name: commandName,
    id: document.querySelector('#aff-id').value
  });
}

/**
 * Reset the shortcut and update the textbox.
 */
async function resetID() {
  await browser.commands.reset(commandName);
  updateUI();
}

/**
 * Update the UI when the page loads.
 */
document.addEventListener('DOMContentLoaded', updateUI);

/**
 * Handle update and reset button clicks
 */
document.querySelector('#update').addEventListener('click', updateID)
document.querySelector('#reset').addEventListener('click', resetID)
