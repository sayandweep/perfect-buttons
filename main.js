function copyBut1() {
  // Get the text field
  var copyText = `/* button-1 */
.perfectbutton1 {
  background: #4958FF;
  color: white;
  border-radius: 10px;
  padding: 10px 15px;
  text-align: center;
  transition: .2s ease-in-out 
}
.perfectbutton1:hover {
  background: #3B48D1
}`;
  
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText);
  
  // Alert the copied text
  alert("Successfully copied Button1 CSS");
}