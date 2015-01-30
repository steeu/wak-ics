
/**
 * ics calendar
 * internet media type: text/calendar
 */


/**
 * get vevent
 */
 
var vEvent = function(entity) {
	try {
	    var result;
	    
		return result;
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};


/**
 * get vcalendar
 */

var vCalendar = function(collection) {
	try {
	    var resultStart =
	        + 'BEGIN:VCALENDAR'
            + 'VERSION:2.0'           // version
            + 'PRODID:'               // http://www.example.com/calendarapplication/'
            + 'METHOD:PUBLISH';

        var result = '';

	    var resultEnd =
            + 'END:VCALENDAR';

        return resultStart + result + resultEnd;	
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
}


/**
 * render event
 */

var renderEvent = function(event) {
	try {
	    var result = ''
    	    + 'BEGIN:VEVENT'
            + 'UID:'                  // 1285935469767a7c7c1a9b3f0df8003a@example.com'
            + 'ORGANIZER;'            // CN="Alice Balder, Example Inc.":MAILTO:alice@example.com
            + 'LOCATION:'             // Somewhere
            + 'SUMMARY:'              // Eine Kurzinfo
            + 'DESCRIPTION:'          // Beschreibung des Termines
            + 'CLASS:PUBLIC'
            + 'DTSTART:'              // 20060910T220000Z
            + 'DTEND:'                // 20060919T215900Z
            + 'DTSTAMP:'              // 20060812T125900Z
            + 'END:VEVENT';
            
            return result;
	} catch (e) {
		WAKTOOLS.log(e);
		return e;		
	}
};

exports.vEvent    = vEvent;
exports.vCalendar = vCalendar;