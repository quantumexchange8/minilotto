<?php

namespace App\Http\Controllers;

use App\Models\Record;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;
use Carbon\Carbon;

class RecordController extends Controller
{
    /**
     * Main page.
     */
    public function index(Request $request)
    {
        // Get the flashed messages from the session
        $toastOption = $request->session()->get('toastOption');

        // Clear the flashed messages from the session
        $request->session()->forget('toastOption');
        $request->session()->save();

        if (isset($toastOption)) {
            return Inertia::render('Dashboard/Dashboard', [
                'toastOption' => $toastOption
            ]);
        }
        return Inertia::render('Dashboard/Dashboard');
    }

    /**
     * Store new record.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        // dd($data);
        Record::create([
            'subject_title' => $data['subject_title'],
            'message' => $data['message'],
        ]);

        $toastOption = 'created';

        return Redirect::route('dashboard')
                            ->with('toastOption', $toastOption);
    }

    /**
     * Update record details.
     */
    public function updateRecord(Request $request, string $id)
    {
        $data = $request->all();

        if (isset($id) && $data['hasChanges']) {
            $existingRecord = Record::find($id);

            $existingRecord->update([
                'subject_title' => $data['subject_title'],
                'message' => $data['message'],
            ]);    
        }

        $toastOption = 'updated';

        return Redirect::route('dashboard')
                            ->with('toastOption', $toastOption);
    }

    /**
     * Get all records.
     */
    public function getAllRecords(Request $request)
    {
        $dateFilter = $request->input('date_filter');
        $query = Record::query();

        if ($dateFilter && gettype($dateFilter) === 'array') {
            // Single date filter
            if (count($dateFilter) === 1) {
                $date = (new \DateTime($dateFilter[0]))->setTimezone(new \DateTimeZone('Asia/Kuala_Lumpur'))->format('Y-m-d');
                $query->whereDate('created_at', $date);
            }
            // Range date filter
            if (count($dateFilter) > 1) {
                $startDate = (new \DateTime($dateFilter[0]))->setTimezone(new \DateTimeZone('Asia/Kuala_Lumpur'))->format('Y-m-d');
                $endDate = (new \DateTime($dateFilter[1]))->setTimezone(new \DateTimeZone('Asia/Kuala_Lumpur'))->format('Y-m-d');
                $query->whereDate('created_at', '>=', $startDate)
                        ->whereDate('created_at', '<=', $endDate);
            }
        }
    
        $data = $query->orderBy('created_at', 'desc')->get();
        return response()->json($data);
    }
    
    /**
     * Delete record.
     */
    public function deleteRecord(Request $request, string $id)
    {
        $data = $request->all();

        if (isset($id)) {
            $existingRecord = Record::find($id);
            // dd($existingRecord);
            $existingRecord->delete();
        }

        $toastOption = 'deleted';

        return Redirect::route('dashboard')
                            ->with('toastOption', $toastOption);
    }
}
