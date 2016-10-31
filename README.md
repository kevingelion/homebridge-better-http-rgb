# homebridge-better-http-rgb

Supports RGB http(s) devices on the HomeBridge Platform and provides a readable
callback for getting and setting the following characteristics to Homekit:

* Characteristic.On
* Characteristic.Brightness
* Characteristic.Hue
* Characteristic.Saturation


# Installation

1. Install homebridge using: `npm install -g homebridge`
2. Install homebridge-http using: `npm install -g homebridge-better-http-rgb`
3. Update your configuration file.  See below for examples.


# Configuration

## Examples

### Full RGB Device

    "accessories": [
        {
            "accessory": "HTTP-RGB",
            "name": "RGB Led Strip",

            "switch": {
                "url": "http://localhost/api/v1/status"
            },

            "brightness": {
                "url": "http://localhost/api/v1/brightness"
            },

            "color": {
                "url": "http://localhost/api/v1/set"
                "brightness": true
            }
        }
    ]

### Single Color Light that only turns "off" and "on"

    "accessories": [
        {
            "accessory": "HTTP-RGB",
            "name": "Single Color Light",

            "switch": {
                "url": "http://localhost/api/v1/status"
            }
        }
    ]

### Single Color Light with Brightness

    "accessories": [
        {
            "accessory": "HTTP-RGB",
            "name": "Single Color Light",

            "switch": {
                "url": "http://localhost/api/v1/status"
            },

            "brightness": {
                "url": "http://localhost/api/v1/brightness"
            }
        }
    ]

### RGB Light without Brightness

    "accessories": [
        {
            "accessory": "HTTP-RGB",
            "name": "Single Color Light",

            "switch": {
                "url": "http://localhost/api/v1/status"
            },

            "color": {
                "url": "http://localhost/api/v1/set"
            }
        }
    ]

This normally will not occur, however, you may not want your application to
display a "brightness" slider to the user.  In this case, you will want to
remove the brightness component from the config.


# Interfacing

All of the urls expect a 200 HTTP status code and a body of a single
string with no HTML markup.

* `GET` `switch.url` expects `0` for Off, and `1` for On.
* `GET` `brightness.url` expects a number from 0 to 100.
* `GET` `color.url` expects a 6-digit hexidemial number.
