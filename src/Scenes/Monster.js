class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;

        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenE.png");
        my.sprite.arm1 = this.add.sprite(this.bodyX + 90, this.bodyY + 30, "monsterParts", "arm_darkA.png");
        my.sprite.arm2 = this.add.sprite(this.bodyX - 80, this.bodyY + 25, "monsterParts", "arm_redE.png");
        my.sprite.arm2.flipX = true;
        my.sprite.leg1 = this.add.sprite(this.bodyX + 60, this.bodyY + 160, "monsterParts", "leg_blueD.png");
        my.sprite.leg2 = this.add.sprite(this.bodyX - 60, this.bodyY + 160, "monsterParts", "leg_whiteC.png");
        my.sprite.leg2.flipX = true;
        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY - 20, "monsterParts", "eye_cute_light.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthI.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "mouthF.png");
        my.sprite.fangs.visible = false;
        my.sprite.acc1 = this.add.sprite(this.bodyX + 45, this.bodyY - 110, "monsterParts", "detail_red_horn_small.png");
        my.sprite.acc2 = this.add.sprite(this.bodyX - 30, this.bodyY - 140, "monsterParts", "detail_green_antenna_large.png");
        my.sprite.acc2.flipX = true;

        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        
        if(Phaser.Input.Keyboard.JustDown(this.sKey)){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if(Phaser.Input.Keyboard.JustDown(this.fKey)){
            my.sprite.fangs.visible = true;
            my.sprite.smile.visible = false;
        }

        if (this.dKey.isDown) {
            my.sprite.body.x ++;
            my.sprite.arm1.x ++;
            my.sprite.arm2.x ++;
            my.sprite.leg1.x ++;
            my.sprite.leg2.x ++;
            my.sprite.eye.x ++;
            my.sprite.smile.x ++;
            my.sprite.fangs.x ++;
            my.sprite.acc1.x ++;
            my.sprite.acc2.x ++;
        }
        if(this.aKey.isDown){
            my.sprite.body.x --;
            my.sprite.arm1.x --;
            my.sprite.arm2.x --;
            my.sprite.leg1.x --;
            my.sprite.leg2.x --;
            my.sprite.eye.x --;
            my.sprite.smile.x --;
            my.sprite.fangs.x --;
            my.sprite.acc1.x --;
            my.sprite.acc2.x --;
        }

       
    }

}