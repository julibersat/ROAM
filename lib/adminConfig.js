AdminConfig = {
  collections: {
    CapturePrompts: {
    	tableColumns: [
	   		{ label: 'Caputre prompt', name: 'text' },
  		]
    },
    DirectionUnits: {
    	tableColumns: [
    		{label: "unit text", name: "text"}
    	]
    },
    DirectiveTypes: {
    	tableColumns: [
    		{label: "directive type", name: "name"}
    	]
    },
    DirectionVerbs: {
    	tableColumns: [
    		{label: "direction verb", name: "text"}
    	]
    },
    UserCaptures: {
    	tableColumns: [
    		{label: "tags", name: "tags"},
    		{label: "directive text", name: "directiveText"},
    		{label: "directive type", name: "directiveType"},
    		{label: "created at", name: "createdAt"},
    	]
    },
    UserJourneys: {
    	tableColumns: [
    		{label: "journey type", name: "journeyType"},
    		{label: "time start", name: "timeStart"},
    		{label: "time end", name: "timeEnd"},
    	]
    },
  }
};

