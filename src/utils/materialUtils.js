// Define materials
export const materials = {
    body: {
        "01 CHROME SATIN ROYAL BLUE": {
            color: '#002F6C',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
        "02 CHROME SATIN OLIVE GREEN": {
            color: '#4B5D23',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
        "03 CHROME SATIN BURNT ORANGE": {
            color: '#CC5500',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
        "04 CHROME SATIN CHERRY RED": {
            color: '#C8102E',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
        "05 CHROME SATIN MIDNIGHT BLACK": {
            color: '#000000',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
        "06 CHROME SATIN ALUMINUM": {
            color: '#D0D0D0',
            camera: 'camera_body',
            cameraMobile: 'camera_body_mobile',
        },
    },
    corners: {
        "Chrome ALUMINIUM": {
            color: '#D0D0D0',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
        "Chrome MIDNIGHT BLACK": {
            color: '#000000',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
        "Chrome CHERRY RED": {
            color: '#C8102E',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
        "Chrome ROYAL BLUE": {
            color: '#002F6C',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
        "Chrome SATIN BURNT ORANGE": {
            color: '#CC5500',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
        "Chrome SATIN OLIVE GREEN": {
            color: '#4B5D23',
            camera: 'camera_corners',
            cameraMobile: 'camera_corners_mobile',
        },
    },
    handles: {
        "Chrome ALUMINIUM": {
            color: '#D0D0D0',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
        "Chrome MIDNIGHT BLACK": {
            color: '#000000',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
        "Chrome CHERRY RED": {
            color: '#C8102E',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
        "Chrome ROYAL BLUE": {
            color: '#002F6C',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
        "Chrome SATIN BURNT ORANGE": {
            color: '#CC5500',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
        "Chrome SATIN OLIVE GREEN": {
            color: '#4B5D23',
            camera: 'camera_handle',
            cameraMobile: 'camera_handle_mobile',
        },
    },
    wheels: {
        "Chrome ALUMINIUM": {
            color: '#D0D0D0',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
        "Chrome MIDNIGHT BLACK": {
            color: '#000000',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
        "Chrome CHERRY RED": {
            color: '#C8102E',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
        "Chrome ROYAL BLUE": {
            color: '#002F6C',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
        "Chrome SATIN BURNT ORANGE": {
            color: '#CC5500',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
        "Chrome SATIN OLIVE GREEN": {
            color: '#4B5D23',
            camera: 'camera_wheels',
            cameraMobile: 'camera_wheels_mobile',
        },
    },
};

// Define default cameras for parts
export const defaultCameras = {
    body: {
        desktop: 'default_camera_desktop',
        mobile: 'default_camera_mobile',
    },
    corners: {
        desktop: 'default_camera_desktop',
        mobile: 'default_camera_mobile',
    },
    handles: {
        desktop: 'default_camera_desktop',
        mobile: 'default_camera_mobile',
    },
    wheels: {
        desktop: 'default_camera_desktop',
        mobile: 'default_camera_mobile',
    },
};

// Define animation modifiers
export const animations = {
    open: 'open',
    close: 'close',
    extend_handle: 'extend_handle',
    retract_handle: 'retract_handle',
    wheel_spinner_on: 'wheel_spinner_on',
    wheel_spinner_off: 'wheel_spinner_off',
};

export function changeMaterial(part, material) {
    const partMaterials = materials[part];
    if (partMaterials) {
        const { color, camera, cameraMobile } = partMaterials[material] || {};
        if (color) {
            // Apply the material color and camera modifier
            applyColor(part, color);
            applyCamera(part, camera, cameraMobile);
        } else {
            // Fallback to default camera
            const { desktop, mobile } = defaultCameras[part] || {};
            applyCamera(part, desktop, mobile);
        }
    }
}

function applyColor(part, color) {
    // Logic to apply color to the 3D model part
}

function applyCamera(part, camera, cameraMobile) {
    // Logic to switch camera view
}

export function triggerAnimation(animationName) {
    const animation = animations[animationName];
    if (animation) {
        // Logic to trigger animation
    }
}
