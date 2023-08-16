import { UITabbedPanel, UISpan } from './libs/ui.js';
import { SidebarScene } from './Sidebar.Scene.js';
import { SidebarProject } from './Sidebar.Project.js';

function Sidebar( editor ) {

	const strings = editor.strings;
	const container = new UITabbedPanel();
	container.setId( 'sidebar' );
	const scene = new UISpan().add(
		new SidebarScene( editor ),
	);
	const project = new SidebarProject( editor );
	container.addTab( 'scene', strings.getKey( 'sidebar/scene' ), scene );
	container.select( 'scene' );
	return container;
}

export { Sidebar };
