/**
 * This is the main entry point for your plugin.
 *
 * All information regarding plugin development can be found at
 * https://developer.vatom.com/plugins/plugins/
 *
 * @license MIT
 * @author Vatom Inc.
 */
export default class MyPlugin extends BasePlugin {

    /** Plugin info */
    static id = "particle_systems"
    static name = "Particle Systems"

    /** Called on load */
    onLoad() {

        this.menus.register({
            id: 'fire1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fire',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFire1Press()
        })

        this.menus.register({
            id: 'firework1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Firework',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFirework1Press()
        })

        this.menus.register({
            id: 'fountain1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Bubbles',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSBubbles1Press()
        })

        this.menus.register({
            id: 'fog1',
            title: 'Particle System',
            icon: this.paths.absolute('./icon.svg'),
            text: 'Particle System - Fog',
            order: 0,
            section: 'insert-object',
            adminOnly: false,
            inAccordion: false,
            currentUser: false,
            otherUsers: false,
            action: () => this.onPSFog1Press()
        })

    }

    // Fire 1
    onPSFire1Press() {
        const value = this.menus.prompt({
            icon: 'info',
            title: 'Particle System Name',
            text: 'Please enter the new particle system name',
            inputType: 'text',
            initialValue: 'ps_fire',
            placeholder: 'Type something...'
        }).then((value) => {
            this.user.getPosition().then((pos) =>
            {
                this.objects.create({
                    name: value + '_a',
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y,
                    y:pos.z,
                    particle_emitter_type: 'Sphere',
                    particle_texture: "https://storage.googleapis.com/ydangle-high-fidelity-test-2.appspot.com/server/v9R8iywss6/fire.png",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 1.0,
                    particle_end_scale: 0.5,
                    particle_gravity: 0,
                    particle_emit_min_span: 16,
                    particle_emit_max_span: 48,
                    particle_emit_delay: 0.05,
                    particle_life_time: 0.5,
                    particle_color1: '#ff0000',
                    particle_color2: '#ffff00',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 1,
                    particle_max_speed: 3,
                    particle_radial_angle: 15,
                    particle_direction_x: 0,
                    particle_direction_y: 1,
                    particle_direction_z: 0,
                    particle_box_size_x: 5,
                    particle_box_size_y: 1,
                    particle_box_size_z: 5,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_ADD',
                    particle_start_alpha: 1,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });

                this.objects.create({
                    name: value + '_b',
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y,
                    y:pos.z,
                    particle_emitter_type: 'Sphere',
                    particle_texture: "https://storage.googleapis.com/ydangle-high-fidelity-test-2.appspot.com/server/v9R8iywss6/smoke.png",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 1.0,
                    particle_end_scale: 1.0,
                    particle_gravity: 0,
                    particle_emit_min_span: 1,
                    particle_emit_max_span: 5,
                    particle_emit_delay: 0.1,
                    particle_life_time: 4,
                    particle_color1: '#ff0000',
                    particle_color2: '#ffff00',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 1,
                    particle_max_speed: 2,
                    particle_radial_angle: 10,
                    particle_direction_x: 0,
                    particle_direction_y: 1,
                    particle_direction_z: 0,
                    particle_box_size_x: 5,
                    particle_box_size_y: 1,
                    particle_box_size_z: 5,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_STANDARD',
                    particle_start_alpha: 0.3,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });
            });
        });
    }

    // Firework 1
    onPSFirework1Press() {
        const value = this.menus.prompt({
            icon: 'info',
            title: 'Particle System Name',
            text: 'Please enter the new particle system name',
            inputType: 'text',
            initialValue: 'ps_firework',
            placeholder: 'Type something...'
        }).then((value) => {
            this.user.getPosition().then((pos) =>
            {
                this.objects.create({
                    name: value + '_a',
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y + 4,
                    y:pos.z,
                    particle_emitter_type: 'Point',
                    particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 0.5,
                    particle_end_scale: 0.2,
                    particle_gravity: 0.01,
                    particle_emit_min_span: 100,
                    particle_emit_max_span: 128,
                    particle_emit_delay: 1,
                    particle_life_time: 2,
                    particle_color1: '#ff0000',
                    particle_color2: '#ffff00',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 3,
                    particle_max_speed: 5,
                    particle_radial_angle: 180,
                    particle_direction_x: 0,
                    particle_direction_y: 1,
                    particle_direction_z: 0,
                    particle_box_size_x: 5,
                    particle_box_size_y: 1,
                    particle_box_size_z: 5,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_ADD',
                    particle_start_alpha: 1,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });

                this.objects.create({
                    name: value + '_b',
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y + 4,
                    y:pos.z,
                    particle_emitter_type: 'Sphere',
                    particle_texture: "https://firebasestorage.googleapis.com/v0/b/ydangle-high-fidelity-test-2.appspot.com/o/server%2FVaHQdiYp4E%2FUploads%2Fflare.png?alt=media&token=324d2678-995d-4629-bae0-ce11928798bf",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 1.0,
                    particle_end_scale: 0.3,
                    particle_gravity: 0,
                    particle_emit_min_span: 64,
                    particle_emit_max_span: 128,
                    particle_emit_delay: 6.1,
                    particle_life_time: 3,
                    particle_color1: '#ff0000',
                    particle_color2: '#d06eff',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 5,
                    particle_max_speed: 10,
                    particle_radial_angle: 90,
                    particle_direction_x: 0,
                    particle_direction_y: 1,
                    particle_direction_z: 0,
                    particle_box_size_x: 5,
                    particle_box_size_y: 1,
                    particle_box_size_z: 5,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_ADD',
                    particle_start_alpha: 1,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });
            });
        });
    }

    // Bubbles 1
    onPSBubbles1Press() {
        const value = this.menus.prompt({
            icon: 'info',
            title: 'Particle System Name',
            text: 'Please enter the new particle system name',
            inputType: 'text',
            initialValue: 'ps_bubbles',
            placeholder: 'Type something...'
        }).then((value) => {
            this.user.getPosition().then((pos) =>
            {
                this.objects.create({
                    name: value,
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y + 1,
                    y:pos.z,
                    particle_emitter_type: 'Sphere',
                    particle_texture: "https://storage.googleapis.com/ydangle-high-fidelity-test-2.appspot.com/server/v9R8iywss6/bubble.png",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 0.5,
                    particle_end_scale: 1.0,
                    particle_gravity: -0.03,
                    particle_emit_min_span: 10,
                    particle_emit_max_span: 20,
                    particle_emit_delay: 0.1,
                    particle_life_time: 3,
                    particle_color1: '#ffffff',
                    particle_color2: '#a0a0ff',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 10,
                    particle_max_speed: 20,
                    particle_radial_angle: 5,
                    particle_direction_x: 0,
                    particle_direction_y: 0,
                    particle_direction_z: 1,
                    particle_box_size_x: 5,
                    particle_box_size_y: 1,
                    particle_box_size_z: 5,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_ADD',
                    particle_start_alpha: 1,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });
            });
        });
    }

    // Fog 1
    onPSFog1Press() {
        const value = this.menus.prompt({
            icon: 'info',
            title: 'Particle System Name',
            text: 'Please enter the new particle system name',
            inputType: 'text',
            initialValue: 'ps_fog',
            placeholder: 'Type something...'
        }).then((value) => {
            this.user.getPosition().then((pos) =>
            {
                this.objects.create({
                    name: value,
                    type:'particles',
                    scale:1,
                    x:pos.x,
                    height:pos.y,
                    y:pos.z,
                    particle_emitter_type: 'Box',
                    particle_texture: "https://storage.googleapis.com/ydangle-high-fidelity-test-2.appspot.com/server/v9R8iywss6/puff.png",
                    particle_behavior: "",
                    particle_mass: 1,
                    particle_start_scale: 0.1,
                    particle_end_scale: 3,
                    particle_gravity: 0,
                    particle_emit_min_span: 64,
                    particle_emit_max_span: 64,
                    particle_emit_delay: 0.5,
                    particle_life_time: 5,
                    particle_color1: '#ffffff',
                    particle_color2: '#9f9f9f',
                    particle_velocity_type: 'Radial',       // Vector, Radial
                    particle_min_speed: 0.1,
                    particle_max_speed: 2,
                    particle_radial_angle: 5,
                    particle_direction_x: 0,
                    particle_direction_y: 1,
                    particle_direction_z: 0,
                    particle_box_size_x: 10,
                    particle_box_size_y: 1,
                    particle_box_size_z: 10,
                    particle_sphere_radius: 1,
                    particle_blend_mode: 'BLENDMODE_STANDARD',
                    particle_start_alpha: 0.3,
                    particle_end_alpha: 0,
                    use_original_scale: true,
                    temporary:false, collide:false, clientOnly:false
                });
            });
        });
    }
}
