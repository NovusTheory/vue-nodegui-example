import { createApp, Window, WindowSettings } from 'vue-nodegui'
import App from './App.vue'
import { QIcon } from '@nodegui/nodegui';
import * as path from 'path'
import * as process from 'process'

const settings = new WindowSettings();
settings.width = 800;
settings.height = 600;
settings.title = "vue-nodegui example",
settings.windowIcon = new QIcon(path.join(process.cwd(), 'src/assets/logo.png'))

const window = new Window(settings);
createApp().mount(App, window);