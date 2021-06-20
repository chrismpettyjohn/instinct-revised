## Overview
The Emulator Module provides reusable RESTful API to work with emulator settings and texts

### Emulator Settings RESTful API

#### Fetch Emulator Settings
Returns the emulator_settings for users with the `Manage Emulator` scope
```
GET /api/emulator/settings
```

#### Update Emulator Settings
Update the emulator_settings for users with the `Manage Emulator` scope
```
PATCH /api/emulator/settings
[
    {
        id: string;
        value: string;
     }
]
```

<hr />

### Emulator Texts RESTful API

#### Fetch Emulator Texts
Returns the emulator_texts for users with the `Manage Emulator` scope
```
GET /api/emulator/texts
```

#### Update Emulator Texts
Update the emulator_texts for users with the `Manage Emulator` scope
```
PATCH /api/emulator/texts
[
    {
        id: string;
        value: string;
     }
]
```
