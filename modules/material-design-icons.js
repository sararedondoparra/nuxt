
import { resolve } from 'path'

const icons = ['Phone', 'Alarm', 'Home', 'Television', 'Rabbit', 'Play', 'Pause']

export default function () {
	this.nuxt.hook('components:dirs', (dirs) => {
		dirs.push({
			path: resolve('node_modules/vue-material-design-icons'),
			prefix: 'MlIcon',
			pattern: `**/@(${icons.join('|')}).vue`,
		})
	})
}