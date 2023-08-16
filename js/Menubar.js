import { UIPanel } from './libs/ui.js';
import { MenubarAdd } from './Menubar.Add.js';

function Menubar( editor ) {
	const container = new UIPanel();
	container.setId( 'menubar' );
	container.add( new MenubarAdd( editor ) );
	return container;
}

export { Menubar };
