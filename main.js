$(document).ready(function() {
	// highlight active nav tab
	var bodyID = $('body').attr('id');
	$('#'+bodyID+'Tab').addClass('activeTab');
	if (bodyID == 'oldPerson') {
		$('#appsTab').addClass('activeTab');
	}
});