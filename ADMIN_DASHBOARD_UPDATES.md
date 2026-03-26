# Admin Dashboard Updates

## Changes Implemented

### 1. Status Label Change
- ✅ Replaced "UNAVAILABLE" / "Not Available" with "SOLD" across the admin dashboard
- Updated in: `slotStatus.js` and `AdminSlots.jsx`

### 2. Sorting Functionality
Added sortable columns for all requested fields:
- ✅ UNIT (Unit column)
- ✅ LOT (Lot column)
- ✅ BLOCK (Block column)
- ✅ PHASE (Phase column)
- ✅ PRICE (Price column)
- ✅ TYPE (Type column)
- ✅ STATUS (Status column)
- ✅ FLOOR AREA (Area column)

**How to use:**
- Click any column header to sort ascending
- Click again to sort descending
- Click a third time to remove sorting

### 3. Filter Customization
Added ability to customize which categories appear in the filter panel:
- ✅ New "Customize" button next to the Filter button
- ✅ Enable/disable filter categories: TYPE, UNIT, STATUS, PRICE, LOT, AREA, BLOCK, PHASE, SOURCE
- ✅ Default enabled filters: TYPE, UNIT, STATUS, PRICE (as requested)

**How to use:**
- Click "Customize" button to open filter settings
- Check/uncheck categories to show/hide them in the filter panel
- Changes apply immediately to the filter panel

## Files Modified
1. `/src/lib/slotStatus.js` - Changed status label
2. `/src/pages/AdminSlots.jsx` - Added sorting and filter customization
